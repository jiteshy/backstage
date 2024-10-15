/*! For license information please see 3d56e5ce.11115f9e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[892267],{783002:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var s=r(785893),i=r(511151);const d={id:"frontend-plugin-api",title:"@backstage/frontend-plugin-api",description:"API Reference for @backstage/frontend-plugin-api"},t=void 0,c={id:"reference/frontend-plugin-api",title:"@backstage/frontend-plugin-api",description:"API Reference for @backstage/frontend-plugin-api",source:"@site/versioned_docs/version-stable/reference/frontend-plugin-api.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api",permalink:"/docs/reference/frontend-plugin-api",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/frontend-plugin-api.md",tags:[],version:"stable",frontMatter:{id:"frontend-plugin-api",title:"@backstage/frontend-plugin-api",description:"API Reference for @backstage/frontend-plugin-api"}},l={},o=[{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,s.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})]}),"\n",(0,s.jsx)(n.p,{children:"Core API used by Backstage frontend plugins."}),"\n",(0,s.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Function"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.analyticscontext",children:"AnalyticsContext(options)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Provides components in the child react tree an Analytics Context, ensuring all analytics events captured within the context have relevant attributes."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createcomponentextension",children:"createComponentExtension(options)"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createcomponentref",children:"createComponentRef(options)"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createextension",children:"createExtension(options)"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createextensionblueprint",children:"createExtensionBlueprint(options)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["A simpler replacement for wrapping up ",(0,s.jsx)(n.code,{children:"createExtension"})," inside a kind or type. This allows for a cleaner API for creating types and instances of those types."]}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createextensiondataref",children:"createExtensionDataRef(id)"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createextensiondataref_1",children:"createExtensionDataRef()"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createextensioninput",children:"createExtensionInput(extensionData, config)"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createexternalrouteref",children:"createExternalRouteRef(options)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Creates a route descriptor, to be later bound to a concrete route by the app. Used to implement cross-plugin route references."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createfrontendmodule",children:"createFrontendModule(options)"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createfrontendplugin",children:"createFrontendPlugin(options)"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createrouteref",children:"createRouteRef(config)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.routeref",children:"RouteRef"})," from a route descriptor."]}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createsubrouteref",children:"createSubRouteRef(config)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.subrouteref",children:"SubRouteRef"})," from a route descriptor."]}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionboundary",children:"ExtensionBoundary(props)"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.useanalytics",children:"useAnalytics()"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Gets a pre-configured analytics tracker."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.usecomponentref",children:"useComponentRef(ref)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Returns the component associated with the given ref."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.userouteref",children:"useRouteRef(routeRef)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"React hook for constructing URLs to routes."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.userouterefparams",children:"useRouteRefParams(_routeRef)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"React hook for retrieving dynamic params from the current URL."}),"\n"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Interface"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnode",children:"AppNode"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["A node in the ",(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.apptree",children:"AppTree"}),"."]}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnodeedges",children:"AppNodeEdges"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["The connections from this ",(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnode",children:"AppNode"})," to other nodes."]}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnodeinstance",children:"AppNodeInstance"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["The instance of this ",(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnode",children:"AppNode"})," in the ",(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.apptree",children:"AppTree"}),"."]}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnodespec",children:"AppNodeSpec"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["The specification for this ",(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnode",children:"AppNode"})," in the ",(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.apptree",children:"AppTree"}),"."]}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.apptree",children:"AppTree"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["The app tree containing all ",(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnode",children:"AppNode"}),"s of the app."]}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.apptreeapi",children:"AppTreeApi"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["The API for interacting with the ",(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.apptree",children:"AppTree"}),"."]}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.componentsapi",children:"ComponentsApi"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"API for looking up components based on component refs."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.configurableextensiondataref",children:"ConfigurableExtensionDataRef"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createfrontendmoduleoptions",children:"CreateFrontendModuleOptions"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extension",children:"Extension"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionblueprint",children:"ExtensionBlueprint"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionboundaryprops",children:"ExtensionBoundaryProps"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensioninput",children:"ExtensionInput"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionoverrides",children:"ExtensionOverrides"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.externalrouteref",children:"ExternalRouteRef"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Route descriptor, to be later bound to a concrete route by the app. Used to implement cross-plugin route references."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.frontendmodule",children:"FrontendModule"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.frontendplugin",children:"FrontendPlugin"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.iconsapi",children:"IconsApi"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"API for accessing app icons."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.pluginoptions",children:"PluginOptions"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.routeref",children:"RouteRef"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Absolute route reference."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.routeresolutionapi",children:"RouteResolutionApi"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.subrouteref",children:"SubRouteRef"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["Descriptor of a route relative to an absolute ",(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.routeref",children:"RouteRef"}),"."]}),"\n"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"namespaces",children:"Namespaces"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Namespace"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createcomponentextension",children:"createComponentExtension"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionboundary",children:"ExtensionBoundary"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Variable"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.analyticsapiref",children:"analyticsApiRef"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["The API reference of ",(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.analyticsapi",children:"AnalyticsApi"}),"."]}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.apiblueprint",children:"ApiBlueprint"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Creates utility API extensions."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.approotelementblueprint",children:"AppRootElementBlueprint"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Creates extensions that render a React element at the app root, outside of the app layout. This is useful for example for shared popups and similar."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.approotwrapperblueprint",children:"AppRootWrapperBlueprint"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Creates a extensions that render a React wrapper at the app root, enclosing the app layout. This is useful for example for adding global React contexts and similar."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.apptreeapiref",children:"appTreeApiRef"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ApiRef"})," of ",(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.apptreeapi",children:"AppTreeApi"}),"."]}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.componentsapiref",children:"componentsApiRef"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ApiRef"})," of ",(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.componentsapi",children:"ComponentsApi"}),"."]}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.corecomponentrefs",children:"coreComponentRefs"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.coreextensiondata",children:"coreExtensionData"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.iconbundleblueprint",children:"IconBundleBlueprint"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.iconsapiref",children:"iconsApiRef"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ApiRef"})," of ",(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.iconsapi",children:"IconsApi"}),"."]}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.navitemblueprint",children:"NavItemBlueprint"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Creates extensions that make up the items of the nav bar."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.navlogoblueprint",children:"NavLogoBlueprint"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Creates an extension that replaces the logo in the nav bar with your own."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.pageblueprint",children:"PageBlueprint"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Createx extensions that are routable React page components."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.routerblueprint",children:"RouterBlueprint"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.routeresolutionapiref",children:"routeResolutionApiRef"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ApiRef"})," of ",(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.routeresolutionapi",children:"RouteResolutionApi"}),"."]}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.signinpageblueprint",children:"SignInPageBlueprint"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Creates an extension that replaces the sign in page."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.themeblueprint",children:"ThemeBlueprint"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Creates an extension that adds/replaces an app theme."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.translationblueprint",children:"TranslationBlueprint"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Creates an extension that adds translations to your app."}),"\n"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Type Alias"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.analyticsapi",children:"AnalyticsApi"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"The Analytics API is used to track user behavior in a Backstage instance."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.analyticscontextvalue",children:"AnalyticsContextValue"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Analytics context envelope."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.analyticsevent",children:"AnalyticsEvent"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Represents an event worth tracking in an analytics system that could inform how users of a Backstage instance are using its features."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.analyticseventattributes",children:"AnalyticsEventAttributes"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"A structure allowing other arbitrary metadata to be provided by analytics event emitters."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.analyticstracker",children:"AnalyticsTracker"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Represents a tracker with methods that can be called to track events in a configured analytics service."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.anyextensiondataref",children:"AnyExtensionDataRef"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.anyexternalroutes",children:"AnyExternalRoutes"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.anyrouterefparams",children:"AnyRouteRefParams"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Catch-all type for route params."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.anyroutes",children:"AnyRoutes"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.commonanalyticscontext",children:"CommonAnalyticsContext"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Common analytics context attributes."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.componentref",children:"ComponentRef"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.coreerrorboundaryfallbackprops",children:"CoreErrorBoundaryFallbackProps"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.corenotfounderrorpageprops",children:"CoreNotFoundErrorPageProps"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.coreprogressprops",children:"CoreProgressProps"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createextensionblueprintoptions",children:"CreateExtensionBlueprintOptions"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createextensionoptions",children:"CreateExtensionOptions"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionblueprintparameters",children:"ExtensionBlueprintParameters"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondatacontainer",children:"ExtensionDataContainer"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondataref",children:"ExtensionDataRef"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondatareftovalue",children:"ExtensionDataRefToValue"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondatavalue",children:"ExtensionDataValue"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondefinition",children:"ExtensionDefinition"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondefinitionparameters",children:"ExtensionDefinitionParameters"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.featureflagconfig",children:"FeatureFlagConfig"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Feature flag configuration."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.frontendfeature",children:"FrontendFeature"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.iconcomponent",children:"IconComponent"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"IconComponent is the common icon type used throughout Backstage when working with and rendering generic icons, including the app system icons."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.portableschema",children:"PortableSchema"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.resolvedextensioninput",children:"ResolvedExtensionInput"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Convert a single extension input into a matching resolved input."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.resolvedextensioninputs",children:"ResolvedExtensionInputs"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Converts an extension input map into a matching collection of resolved inputs."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.resolveinputvalueoverrides",children:"ResolveInputValueOverrides"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.routefunc",children:"RouteFunc"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"TS magic for handling route parameters."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.routeresolutionapiresolveoptions",children:"RouteResolutionApiResolveOptions"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},675251:(e,n,r)=>{var s=r(667294),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var s,d={},o=null,h=null;for(s in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(h=n.ref),n)t.call(n,s)&&!l.hasOwnProperty(s)&&(d[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===d[s]&&(d[s]=n[s]);return{$$typeof:i,type:e,key:o,ref:h,props:d,_owner:c.current}}n.Fragment=d,n.jsx=o,n.jsxs=o},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>t});var s=r(667294);const i={},d=s.createContext(i);function t(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);