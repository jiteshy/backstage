/*! For license information please see 6939351e.2e9ddd5b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[261775],{775712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(785893),o=t(511151);const r={id:"plugin-techdocs-react.useshadowdomstylesloading",title:"useShadowDomStylesLoading()",description:"API reference for useShadowDomStylesLoading()"},d=void 0,a={id:"reference/plugin-techdocs-react.useshadowdomstylesloading",title:"useShadowDomStylesLoading()",description:"API reference for useShadowDomStylesLoading()",source:"@site/versioned_docs/version-stable/reference/plugin-techdocs-react.useshadowdomstylesloading.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-react.useshadowdomstylesloading",permalink:"/docs/reference/plugin-techdocs-react.useshadowdomstylesloading",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-techdocs-react.useshadowdomstylesloading.md",tags:[],version:"stable",frontMatter:{id:"plugin-techdocs-react.useshadowdomstylesloading",title:"useShadowDomStylesLoading()",description:"API reference for useShadowDomStylesLoading()"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function i(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-react",children:(0,s.jsx)(n.code,{children:"@backstage/plugin-techdocs-react"})})," > ",(0,s.jsx)(n.a,{href:"/docs/reference/plugin-techdocs-react.useshadowdomstylesloading",children:(0,s.jsx)(n.code,{children:"useShadowDomStylesLoading"})})]}),"\n",(0,s.jsx)(n.p,{children:"Returns the style's loading state."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"useShadowDomStylesLoading: (element: Element | null) => boolean\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Type"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"element"}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Element | null"}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"which is the ShadowRoot tree."}),"\n"]})]})})]}),"\n**Returns:**\n",(0,s.jsx)(n.p,{children:"boolean"}),"\n",(0,s.jsx)(n.p,{children:"a boolean value, true if styles are being loaded."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Here's an example that updates the sidebar position only after styles are calculated:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import {\n  TechDocsShadowDom,\n  useShadowDomStylesLoading,\n} from '@backstage/plugin-techdocs-react';\n\nexport const TechDocsReaderPageContent = () => {\n  // ...\n  const dom = useTechDocsReaderDom(entity);\n  const isStyleLoading = useShadowDomStylesLoading(dom);\n\n  const updateSidebarPosition = useCallback(() => {\n    //...\n  }, [dom]);\n\n  useEffect(() => {\n    if (!isStyleLoading) {\n      updateSidebarPosition();\n    }\n  }, [isStyleLoading, updateSidebarPosition]);\n\n  const handleDomAppend = useCallback(\n    (newShadowRoot: ShadowRoot) => {\n      setShadowRoot(newShadowRoot);\n    },\n    [setShadowRoot],\n  );\n\n  return <TechDocsShadowDom element={dom} onAppend={handleDomAppend} />;\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},675251:(e,n,t)=>{var s=t(667294),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var s,r={},l=null,i=null;for(s in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(i=n.ref),n)d.call(n,s)&&!c.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:o,type:e,key:l,ref:i,props:r,_owner:a.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>d});var s=t(667294);const o={},r=s.createContext(o);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);