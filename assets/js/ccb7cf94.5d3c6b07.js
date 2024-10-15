/*! For license information please see ccb7cf94.5d3c6b07.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[823306],{781252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(785893),s=n(511151);const r={id:"how-to-guides",title:"Search How-To guides",sidebar_label:"How-To guides",description:"Search How To guides"},i=void 0,a={id:"features/search/how-to-guides",title:"Search How-To guides",description:"Search How To guides",source:"@site/versioned_docs/version-stable/features/search/how-to-guides.md",sourceDirName:"features/search",slug:"/features/search/how-to-guides",permalink:"/docs/features/search/how-to-guides",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/features/search/how-to-guides.md",tags:[],version:"stable",frontMatter:{id:"how-to-guides",title:"Search How-To guides",sidebar_label:"How-To guides",description:"Search How To guides"},sidebar:"docs",previous:{title:"Collators",permalink:"/docs/features/search/collators"},next:{title:"Overview",permalink:"/docs/features/techdocs/"}},c={},l=[{value:"How to implement your own Search API",id:"how-to-implement-your-own-search-api",level:2},{value:"How to customize fields in the Software Catalog or TechDocs index",id:"how-to-customize-fields-in-the-software-catalog-or-techdocs-index",level:2},{value:"How to limit what can be searched in the Software Catalog",id:"how-to-limit-what-can-be-searched-in-the-software-catalog",level:2},{value:"How to customize search results highlighting styling",id:"how-to-customize-search-results-highlighting-styling",level:2},{value:"How to render search results using extensions",id:"how-to-render-search-results-using-extensions",level:2},{value:"1. Providing an extension in your plugin package",id:"1-providing-an-extension-in-your-plugin-package",level:3},{value:"2. Custom search result extension in the SearchPage",id:"2-custom-search-result-extension-in-the-searchpage",level:3},{value:"2. Custom search result extension in the SidebarSearchModal",id:"2-custom-search-result-extension-in-the-sidebarsearchmodal",level:3},{value:"3. Custom search result extension in a custom SearchModal",id:"3-custom-search-result-extension-in-a-custom-searchmodal",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"how-to-implement-your-own-search-api",children:"How to implement your own Search API"}),"\n",(0,o.jsxs)(t.p,{children:["The Search plugin provides implementation of one primary API by default: the\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/db2666b980853c281b8fe77905d7639c5d255f13/plugins/search/src/apis.ts#L35",children:"SearchApi"}),",\nwhich is responsible for talking to the search-backend to query search results."]}),"\n",(0,o.jsx)(t.p,{children:"There may be occasions where you need to implement this API yourself, to\ncustomize it to your own needs - for example if you have your own search backend\nthat you want to talk to. The purpose of this guide is to walk you through how\nto do that in two steps."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Implement the ",(0,o.jsx)(t.code,{children:"SearchApi"}),"\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/db2666b980853c281b8fe77905d7639c5d255f13/plugins/search/src/apis.ts#L31",children:"interface"}),"\naccording to your needs."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"export class SearchClient implements SearchApi {\n  // your implementation\n}\n"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Override the API ref ",(0,o.jsx)(t.code,{children:"searchApiRef"})," with your new implemented API in the\n",(0,o.jsx)(t.code,{children:"App.tsx"})," using ",(0,o.jsx)(t.code,{children:"ApiFactories"}),".\n",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/api/utility-apis#app-apis",children:"Read more about App APIs"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"const app = createApp({\n  apis: [\n    // SearchApi\n    createApiFactory({\n      api: searchApiRef,\n      deps: { discovery: discoveryApiRef },\n      factory({ discovery }) {\n        return new SearchClient({ discoveryApi: discovery });\n      },\n    }),\n  ],\n});\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"how-to-customize-fields-in-the-software-catalog-or-techdocs-index",children:"How to customize fields in the Software Catalog or TechDocs index"}),"\n",(0,o.jsxs)(t.p,{children:["Sometimes, you might want to have the ability to control which data passes into the search index\nin the catalog collator or customize data for a specific kind. You can easily achieve this\nby passing an ",(0,o.jsx)(t.code,{children:"entityTransformer"})," callback to the ",(0,o.jsx)(t.code,{children:"DefaultCatalogCollatorFactory"}),". This behavior\nis also possible for the ",(0,o.jsx)(t.code,{children:"DefaultTechDocsCollatorFactory"}),". You can either simply amend the default behavior\nor even write an entirely new document (which should still follow some required basic structure)."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"authorization"})," and ",(0,o.jsx)(t.code,{children:"location"})," cannot be modified via a ",(0,o.jsx)(t.code,{children:"entityTransformer"}),", ",(0,o.jsx)(t.code,{children:"location"})," can be modified only through ",(0,o.jsx)(t.code,{children:"locationTemplate"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/search.ts"',children:"const catalogEntityTransformer: CatalogCollatorEntityTransformer = (\n  entity: Entity,\n) => {\n  if (entity.kind === 'SomeKind') {\n    return {\n      // customize here output for 'SomeKind' kind\n    };\n  }\n\n  return {\n    // and customize default output\n    ...defaultCatalogCollatorEntityTransformer(entity),\n    text: 'my super cool text',\n  };\n};\n\nindexBuilder.addCollator({\n  collator: DefaultCatalogCollatorFactory.fromConfig(env.config, {\n    discovery: env.discovery,\n    tokenManager: env.tokenManager,\n    /* highlight-add-next-line */\n    entityTransformer: catalogEntityTransformer,\n  }),\n});\n\nconst techDocsEntityTransformer: TechDocsCollatorEntityTransformer = (\n  entity: Entity,\n) => {\n  return {\n    // add more fields to the index\n    tags: entity.metadata.tags,\n  };\n};\n\nconst techDocsDocumentTransformer: TechDocsCollatorDocumentTransformer = (\n  doc: MkSearchIndexDoc,\n) => {\n  return {\n    // add more fields to the index\n    bost: doc.boost,\n  };\n};\n\nindexBuilder.addCollator({\n  collator: DefaultTechDocsCollatorFactory.fromConfig(env.config, {\n    discovery: env.discovery,\n    tokenManager: env.tokenManager,\n    /* highlight-add-next-line */\n    entityTransformer: techDocsEntityTransformer,\n    /* highlight-add-next-line */\n    documentTransformer: techDocsDocumentTransformer,\n  }),\n});\n"})}),"\n",(0,o.jsx)(t.h2,{id:"how-to-limit-what-can-be-searched-in-the-software-catalog",children:"How to limit what can be searched in the Software Catalog"}),"\n",(0,o.jsxs)(t.p,{children:["The Software Catalog includes a wealth of information about the components,\nsystems, groups, users, and other aspects of your software ecosystem. However,\nyou may not always want ",(0,o.jsx)(t.em,{children:"every"})," aspect to appear when a user searches the\ncatalog. Examples include:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Entities of kind ",(0,o.jsx)(t.code,{children:"Location"}),", which are often not useful to Backstage users."]}),"\n",(0,o.jsxs)(t.li,{children:["Entities of kind ",(0,o.jsx)(t.code,{children:"User"})," or ",(0,o.jsx)(t.code,{children:"Group"}),", if you'd prefer that users and groups be\nexposed to search in a different way (or not at all)."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["It's possible to write your own ",(0,o.jsx)(t.a,{href:"/docs/features/search/concepts#collators",children:"Collator"})," to control\nexactly what's available to search, (or a ",(0,o.jsx)(t.a,{href:"/docs/features/search/concepts#decorators",children:"Decorator"}),"\nto filter things out here and there), but the ",(0,o.jsx)(t.code,{children:"DefaultCatalogCollator"})," that's\nprovided by ",(0,o.jsx)(t.code,{children:"@backstage/plugin-catalog-backend"})," offers some configuration too!"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/search.ts"',children:"indexBuilder.addCollator({\n  defaultRefreshIntervalSeconds: 600,\n  collator: DefaultCatalogCollator.fromConfig(env.config, {\n    discovery: env.discovery,\n    tokenManager: env.tokenManager,\n    /* highlight-add-start */\n    filter: {\n      kind: ['API', 'Component', 'Domain', 'Group', 'System', 'User'],\n    },\n    /* highlight-add-end */\n  }),\n});\n"})}),"\n",(0,o.jsx)(t.p,{children:"As shown above, you can add a catalog entity filter to narrow down what catalog\nentities are indexed by the search engine."}),"\n",(0,o.jsx)(t.h2,{id:"how-to-customize-search-results-highlighting-styling",children:"How to customize search results highlighting styling"}),"\n",(0,o.jsxs)(t.p,{children:["The default highlighting styling for matched terms in search results is your\nbrowsers default styles for the ",(0,o.jsx)(t.code,{children:"<mark>"})," HTML tag. If you want to customize\nhow highlighted terms look you can follow Backstage's guide on how to\n",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/app-custom-theme",children:"Customize the look-and-feel of your App"}),"\nto create an override with your preferred styling."]}),"\n",(0,o.jsx)(t.p,{children:"For example, using the new MUI V4+V5 unified theming method, the following will result\nin highlighted words to be bold & underlined:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",metastring:"jsx title=packages/app/src/theme/theme.ts",children:"import {\n  createBaseThemeOptions,\n  createUnifiedTheme,\n  palettes,\n  UnifiedTheme,\n} from '@backstage/theme';\n\nexport const myLightTheme: UnifiedTheme = createUnifiedTheme({\n  ...createBaseThemeOptions({\n    palette: palettes.light,\n  }),\n  defaultPageTheme: 'home',\n  components: {\n    /** @ts-ignore This is temporarily necessary until MUI V5 transition is completed. */\n    BackstageHighlightedSearchResultText: {\n      styleOverrides: {\n        highlight: {\n          color: 'inherit',\n          backgroundColor: 'inherit',\n          fontWeight: 'bold',\n          textDecoration: 'underline',\n        },\n      },\n    },\n  },\n});\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",metastring:"jsx title= packages/app/src/App.tsx",children:"\nconst app : BackstageApp = createApp({\n  ...\n  themes: [{\n    id: 'my-light-theme',\n    title: 'Light Theme',\n    variant: 'light',\n    icon: <LightIcon />,\n    Provider: ({ children }) => (<UnifiedThemeProvider theme={myLightTheme} children={children } />)\n  }]\n});\n"})}),"\n",(0,o.jsx)(t.p,{children:"Obviously if you wanted a dark theme, you would need to provide that as well."}),"\n",(0,o.jsx)(t.h2,{id:"how-to-render-search-results-using-extensions",children:"How to render search results using extensions"}),"\n",(0,o.jsx)(t.p,{children:"Extensions for search results let you customize components used to render search result items, It is possible to provide your own search result item extensions or use the ones provided by plugin packages."}),"\n",(0,o.jsx)(t.h3,{id:"1-providing-an-extension-in-your-plugin-package",children:"1. Providing an extension in your plugin package"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Note: You must use the ",(0,o.jsx)(t.code,{children:"plugin.provide()"})," function to make a search item renderer available. Unlike rendering a list in a standard MUI Table or similar, you cannot simply provide\na rendering function to the ",(0,o.jsx)(t.code,{children:"<SearchResult />"})," component."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Using the example below, you can provide an extension to be used as a search result item:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="plugins/your-plugin/src/plugin.ts"',children:"import { createPlugin } from '@backstage/core-plugin-api';\nimport { createSearchResultListItemExtension } from '@backstage/plugin-search-react';\n\nconst plugin = createPlugin({ id: 'YOUR_PLUGIN_ID' });\n\nexport const YourSearchResultListItemExtension = plugin.provide(\n  createSearchResultListItemExtension({\n    name: 'YourSearchResultListItem',\n    component: () =>\n      import('./components').then(m => m.YourSearchResultListItem),\n  }),\n);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If your list item accept props, you can extend the ",(0,o.jsx)(t.code,{children:"SearchResultListItemExtensionProps"})," with your component specific props:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"export const YourSearchResultListItemExtension: (\n  props: SearchResultListItemExtensionProps<YourSearchResultListItemProps>,\n) => JSX.Element | null = plugin.provide(\n  createSearchResultListItemExtension({\n    name: 'YourSearchResultListItem',\n    component: () =>\n      import('./components').then(m => m.YourSearchResultListItem),\n  }),\n);\n"})}),"\n",(0,o.jsx)(t.p,{children:"Additionally, you can define a predicate function that receives a result and returns whether your extension should be used to render it or not:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="plugins/your-plugin/src/plugin.ts"',children:"import { createPlugin } from '@backstage/core-plugin-api';\nimport { createSearchResultListItemExtension } from '@backstage/plugin-search-react';\n\nconst plugin = createPlugin({ id: 'YOUR_PLUGIN_ID' });\n\nexport const YourSearchResultListItemExtension = plugin.provide(\n  createSearchResultListItemExtension({\n    name: 'YourSearchResultListItem',\n    component: () =>\n      import('./components').then(m => m.YourSearchResultListItem),\n    // Only results matching your type will be rendered by this extension\n    predicate: result => result.type === 'YOUR_RESULT_TYPE',\n  }),\n);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Remember to export your new extension via your plugin's ",(0,o.jsx)(t.code,{children:"index.ts"})," so that it is available from within your app:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="plugins/your-plugin/src/index.ts"',children:"export { YourSearchResultListItem } from './plugin.ts';\n"})}),"\n",(0,o.jsxs)(t.p,{children:["For more details, see the ",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/reference/plugin-search-react.createsearchresultlistitemextension",children:"createSearchResultListItemExtension"})," API reference."]}),"\n",(0,o.jsx)(t.h3,{id:"2-custom-search-result-extension-in-the-searchpage",children:"2. Custom search result extension in the SearchPage"}),"\n",(0,o.jsxs)(t.p,{children:["Once you have exposed your item renderer via the ",(0,o.jsx)(t.code,{children:"plugin.provide()"})," function, you can now override the default search item renderers and tell the ",(0,o.jsx)(t.code,{children:"<SearchResult>"})," component\nwhich renderers to use. Note that the order of the renderers matters! The first one that matches via its predicate function will be used."]}),"\n",(0,o.jsxs)(t.p,{children:["Here is an example of customizing your ",(0,o.jsx)(t.code,{children:"SearchPage"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/components/searchPage.tsx"',children:"import React from 'react';\n\nimport { Grid, Paper } from '@material-ui/core';\nimport BuildIcon from '@material-ui/icons/Build';\n\nimport {\n  Page,\n  Header,\n  Content,\n  DocsIcon,\n  CatalogIcon,\n} from '@backstage/core-components';\nimport { SearchBar, SearchResult } from '@backstage/plugin-search-react';\n\n// Your search result item extension\nimport { YourSearchResultListItem } from '@backstage/your-plugin';\n\n// Extensions provided by other plugin developers\nimport { ToolSearchResultListItem } from '@backstage/plugin-explore';\nimport { TechDocsSearchResultListItem } from '@backstage/plugin-techdocs';\nimport { CatalogSearchResultListItem } from '@internal/plugin-catalog-customized';\n\n// This example omits other components, like filter and pagination\nconst SearchPage = () => (\n  <Page themeId=\"home\">\n    <Header title=\"Search\" />\n    <Content>\n      <Grid container direction=\"row\">\n        <Grid item xs={12}>\n          <Paper>\n            <SearchBar />\n          </Paper>\n        </Grid>\n        <Grid item xs={12}>\n          <SearchResult>\n            <YourSearchResultListItem />\n            <CatalogSearchResultListItem icon={<CatalogIcon />} />\n            <TechDocsSearchResultListItem icon={<DocsIcon />} />\n            <ToolSearchResultListItem icon={<BuildIcon />} />\n          </SearchResult>\n        </Grid>\n      </Grid>\n    </Content>\n  </Page>\n);\n\nexport const searchPage = <SearchPage />;\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Important"}),": A default result item extension (one that does not have a predicate) should be placed as the last child, so it can be used only when no other extensions match the result being rendered.\nIf a non-default extension is specified, the ",(0,o.jsx)(t.code,{children:"DefaultResultListItem"})," component will be used."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"2-custom-search-result-extension-in-the-sidebarsearchmodal",children:"2. Custom search result extension in the SidebarSearchModal"}),"\n",(0,o.jsx)(t.p,{children:"You may be using the SidebarSearchModal component. In this case, you can customize the search items in this component as follows:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/components/Root/Root.tsx"',children:"import { SidebarSearchModal } from '@backstage/plugin-search';\n...\nexport const Root = ({ children }: PropsWithChildren<{}>) => {\n  const styles = useStyles();\n\n  return <SidebarPage>\n    <Sidebar>\n      ...\n      <SidebarSearchModal resultItemComponents={[\n        /* Provide a custom Extension search item renderer */\n        <CustomSearchResultListItem icon={<CatalogIcon />} />,\n        /* Provide an existing search item renderer */\n        <TechDocsSearchResultListItem icon={<DocsIcon />} />\n      ]} />\n      ...\n    </Sidebar>\n    {children}\n  </SidebarPage>;\n};\n"})}),"\n",(0,o.jsx)(t.h3,{id:"3-custom-search-result-extension-in-a-custom-searchmodal",children:"3. Custom search result extension in a custom SearchModal"}),"\n",(0,o.jsx)(t.p,{children:"Assuming you have completely customized your SearchModal, here's an example that renders results with extensions:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/components/searchModal.tsx"',children:"import React from 'react';\n\nimport { DialogContent, DialogTitle, Paper } from '@material-ui/core';\nimport BuildIcon from '@material-ui/icons/Build';\n\nimport { DocsIcon, CatalogIcon } from '@backstage/core-components';\nimport { SearchBar, SearchResult } from '@backstage/plugin-search-react';\n\n// Your search result item extension\nimport { YourSearchResultListItem } from '@backstage/your-plugin';\n\n// Extensions provided by other plugin developers\nimport { ToolSearchResultListItem } from '@backstage/plugin-explore';\nimport { TechDocsSearchResultListItem } from '@backstage/plugin-techdocs';\nimport { CatalogSearchResultListItem } from '@internal/plugin-catalog-customized';\n\nexport const SearchModal = ({ toggleModal }: { toggleModal: () => void }) => (\n  <>\n    <DialogTitle>\n      <Paper>\n        <SearchBar />\n      </Paper>\n    </DialogTitle>\n    <DialogContent>\n      <SearchResult onClick={toggleModal}>\n        <CatalogSearchResultListItem icon={<CatalogIcon />} />\n        <TechDocsSearchResultListItem icon={<DocsIcon />} />\n        <ToolSearchResultListItem icon={<BuildIcon />} />\n        {/* As a \"default\" extension, it does not define a predicate function,\n        so it must be the last child to render results that do not match the above extensions */}\n        <YourSearchResultListItem />\n      </SearchResult>\n    </DialogContent>\n  </>\n);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["There are other more specific search results layout components that also accept result item extensions, check their documentation: ",(0,o.jsx)(t.a,{href:"https://backstage.io/storybook/?path=/story/plugins-search-searchresultlist--with-result-item-extensions",children:"SearchResultList"})," and ",(0,o.jsx)(t.a,{href:"https://backstage.io/storybook/?path=/story/plugins-search-searchresultgroup--with-result-item-extensions",children:"SearchResultGroup"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},675251:(e,t,n)=>{var o=n(667294),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,r={},l=null,h=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)i.call(t,o)&&!c.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:s,type:e,key:l,ref:h,props:r,_owner:a.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var o=n(667294);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);