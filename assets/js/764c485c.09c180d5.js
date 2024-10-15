/*! For license information please see 764c485c.09c180d5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[112901],{514502:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var s=r(785893),t=r(511151);const c={id:"plugin-catalog-node",title:"@backstage/plugin-catalog-node",description:"API Reference for @backstage/plugin-catalog-node"},i=void 0,l={id:"reference/plugin-catalog-node",title:"@backstage/plugin-catalog-node",description:"API Reference for @backstage/plugin-catalog-node",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-node.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-node",permalink:"/docs/reference/plugin-catalog-node",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-node.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-node",title:"@backstage/plugin-catalog-node",description:"API Reference for @backstage/plugin-catalog-node"}},o={},d=[{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node",children:(0,s.jsx)(n.code,{children:"@backstage/plugin-catalog-node"})})]}),"\n",(0,s.jsxs)(n.p,{children:["The catalog-backend-node module for ",(0,s.jsx)(n.code,{children:"@backstage/plugin-catalog-backend"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Function"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.locationspectolocationentity",children:"locationSpecToLocationEntity(opts)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"A standard way of producing a machine generated Location kind entity for a location."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.locationspectometadataname",children:"locationSpecToMetadataName(location)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"A standard way of producing a machine generated name for a location."}),"\n"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Interface"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorcache",children:"CatalogProcessorCache"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"A cache for storing data during processing."}),"\n",(0,s.jsx)(n.p,{children:"The values stored in the cache are always local to each processor, meaning no processor can see cache values from other processors."}),"\n",(0,s.jsx)(n.p,{children:"The cache instance provided to the CatalogProcessor is also scoped to the entity being processed, meaning that each processor run can't see cache values from processing runs for other entities."}),"\n",(0,s.jsx)(n.p,{children:"Values that are set during a processing run will only be visible in the directly following run. The cache will be overwritten every run unless no new cache items are written, in which case the existing values remain in the cache."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.entityprovider",children:"EntityProvider"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["An entity provider is able to provide entities to the catalog. See ",(0,s.jsx)(n.a,{href:"https://backstage.io/docs/features/software-catalog/life-of-an-entity",children:"https://backstage.io/docs/features/software-catalog/life-of-an-entity"})," for more details."]}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.entityproviderconnection",children:"EntityProviderConnection"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"The connection between the catalog and the entity provider. Entity providers use this connection to add and remove entities from the catalog."}),"\n"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Variable"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.processingresult",children:"processingResult"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Factory functions for the standard processing result types."}),"\n"]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Type Alias"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.analyzeoptions",children:"AnalyzeOptions"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessor",children:"CatalogProcessor"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessoremit",children:"CatalogProcessorEmit"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorentityresult",children:"CatalogProcessorEntityResult"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorerrorresult",children:"CatalogProcessorErrorResult"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorlocationresult",children:"CatalogProcessorLocationResult"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorparser",children:"CatalogProcessorParser"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"A parser, that is able to take the raw catalog descriptor data and turn it into the actual result pieces. The default implementation performs a YAML document parsing."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorrefreshkeysresult",children:"CatalogProcessorRefreshKeysResult"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorrelationresult",children:"CatalogProcessorRelationResult"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorresult",children:"CatalogProcessorResult"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.deferredentity",children:"DeferredEntity"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Entities that are not yet processed."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.entitiessearchfilter",children:"EntitiesSearchFilter"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Matches rows in the search table."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.entityfilter",children:"EntityFilter"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"A filter expression for entities."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.entityprovidermutation",children:"EntityProviderMutation"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"A 'full' mutation replaces all existing entities created by this entity provider with new ones. A 'delta' mutation can both add and remove entities provided by this provider. Previously provided entities from a 'full' mutation are not removed."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.entityproviderrefreshoptions",children:"EntityProviderRefreshOptions"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"The options given to an entity refresh operation."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.entityrelationspec",children:"EntityRelationSpec"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Holds the relation data for entities."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.locationanalyzer",children:"LocationAnalyzer"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.locationspec",children:"LocationSpec"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Holds the entity location information."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.placeholderresolver",children:"PlaceholderResolver"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.placeholderresolverparams",children:"PlaceholderResolverParams"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.placeholderresolverread",children:"PlaceholderResolverRead"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.placeholderresolverresolveurl",children:"PlaceholderResolverResolveUrl"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.scmlocationanalyzer",children:"ScmLocationAnalyzer"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},675251:(e,n,r)=>{var s=r(667294),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var s,c={},d=null,a=null;for(s in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,s)&&!o.hasOwnProperty(s)&&(c[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===c[s]&&(c[s]=n[s]);return{$$typeof:t,type:e,key:d,ref:a,props:c,_owner:l.current}}n.Fragment=c,n.jsx=d,n.jsxs=d},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var s=r(667294);const t={},c=s.createContext(t);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);