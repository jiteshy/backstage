/*! For license information please see 5e2951f2.f088b778.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[771048],{900138:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(785893),o=t(511151);const r={id:"deprecations",title:"Deprecations",description:"A list of active and past deprecations"},s=void 0,a={id:"api/deprecations",title:"Deprecations",description:"A list of active and past deprecations",source:"@site/versioned_docs/version-stable/api/deprecations.md",sourceDirName:"api",slug:"/api/deprecations",permalink:"/docs/api/deprecations",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/api/deprecations.md",tags:[],version:"stable",frontMatter:{id:"deprecations",title:"Deprecations",description:"A list of active and past deprecations"},sidebar:"docs",previous:{title:"Package Index",permalink:"/docs/reference/"},next:{title:"Adding Custom Plugin to Existing Monorepo App",permalink:"/docs/tutorials/quickstart-app-plugin"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"App Theme",id:"app-theme",level:3},{value:"Generic Auth API Refs",id:"generic-auth-api-refs",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"This page contains extended documentation for some of the deprecations in\nvarious parts of Backstage. It is not an exhaustive list as most deprecation\nonly come in the form of a changelog notice and a console warning. The\ndeprecations listed here are the ones that need a bit more guidance than what\nfits in a console message."}),"\n",(0,i.jsx)(n.h3,{id:"app-theme",children:"App Theme"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Released 2021-11-12 in @backstage/core-plugin-api v0.1.13"})}),"\n",(0,i.jsxs)(n.p,{children:["In order to provide more flexibility in what types of themes can be used and how\nthey are applied, the ",(0,i.jsx)(n.code,{children:"theme"})," property on the ",(0,i.jsx)(n.code,{children:"AppTheme"})," type is being\ndeprecated and replaced by a ",(0,i.jsx)(n.code,{children:"Provider"})," property instead. The ",(0,i.jsx)(n.code,{children:"Provider"}),"\nproperty is a React component that will be mounted at the root of the app\nwhenever that theme is active. This also removes the tight connection to Material UI and\nopens up for other type of themes, and removes the hardcoded usage of\n",(0,i.jsx)(n.code,{children:"<CssBaseline>"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To migrate an existing theme, remove the ",(0,i.jsx)(n.code,{children:"theme"})," property and move it over to a\nnew ",(0,i.jsx)(n.code,{children:"Provider"})," component, using ",(0,i.jsx)(n.code,{children:"ThemeProvider"})," from Material UI to provide the new\ntheme, along with ",(0,i.jsx)(n.code,{children:"<CssBaseline>"}),". For example, a theme that currently looks like\nthis:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const darkTheme = {\n  id: 'dark',\n  title: 'Dark Theme',\n  variant: 'dark',\n  icon: <DarkIcon />,\n  theme: darkTheme,\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"Would be migrated to the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const darkTheme = {\n  id: 'dark',\n  title: 'Dark Theme',\n  variant: 'dark',\n  icon: <DarkIcon />,\n  Provider: ({ children }) => (\n    <ThemeProvider theme={darkTheme}>\n      <CssBaseline>{children}</CssBaseline>\n    </ThemeProvider>\n  ),\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that the existing ",(0,i.jsx)(n.code,{children:"AppTheme"})," type still requires the ",(0,i.jsx)(n.code,{children:"theme"})," property to be\nset since it's the type that's consumed in the ",(0,i.jsx)(n.code,{children:"AppThemeApi"}),", and it would be a\nbreaking change to make ",(0,i.jsx)(n.code,{children:"theme"})," optional. This means that if you currently\nconstruct the themes that you pass on to ",(0,i.jsx)(n.code,{children:"createApp"})," using ",(0,i.jsx)(n.code,{children:"AppTheme"})," as an\nintermediate type, you will need to work around this in some way, for example by\npassing the themes to ",(0,i.jsx)(n.code,{children:"createApp"})," more directly."]}),"\n",(0,i.jsx)(n.h3,{id:"generic-auth-api-refs",children:"Generic Auth API Refs"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Released 2021-12-16 in @backstage/core-plugin-api v0.3.1"})}),"\n",(0,i.jsxs)(n.p,{children:["There are four auth Utility API references in ",(0,i.jsx)(n.code,{children:"@backstage/core-plugin-api"})," that\nwere too generic to be useful. The APIs in question are ",(0,i.jsx)(n.code,{children:"auth0AuthApiRef"}),",\n",(0,i.jsx)(n.code,{children:"oauth2ApiRef"}),", ",(0,i.jsx)(n.code,{children:"oidcAuthApiRef"}),", and ",(0,i.jsx)(n.code,{children:"samlAuthApiRef"}),". The issue with these\nAPIs was that they had no actual contract of what the backing auth provider was.\nThis made it more or less impossible to use these providers in open source\nplugins in any meaningful way. We also did not want to keep these Utility API\nreferences around just as helpers either, instead opting to remove them and let\nintegrators define their own APIs that are more specific to their auth provider.\nThis is also falls in line with a long-term goal to unify all auth providers to\nnot have separate frontend implementations."]}),"\n",(0,i.jsx)(n.p,{children:"If you're currently using one of these API references for either Sign-In or\naccess delegation within an app, there are a couple of steps you need to take to\nmigrate to your own custom API."}),"\n",(0,i.jsxs)(n.p,{children:["First, you'll need to define a new Utility API reference. If you're only using\nthe API for sign-in, you can put the definition in ",(0,i.jsx)(n.code,{children:"packages/app/src/apis.ts"}),".\nHowever, if you need to access your auth API inside plugins you you'll need to\nexport it from a common package. If you don't already have one, we recommend\ncreating ",(0,i.jsx)(n.code,{children:"@internal/apis"})," and from there exporting the API reference."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// `ProfileInfoApi & BackstageIdentityApi & SessionApi` are required for sign-in\n// Include `OAuthApi & OpenIdConnectApi` only if applicable\nexport const acmeAuthApiRef: ApiRef<\n  OAuthApi &\n    OpenIdConnectApi &\n    ProfileInfoApi &\n    BackstageIdentityApi &\n    SessionApi\n> = createApiRef({\n  id: 'internal.auth.acme',\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Next, you'll want to wire up the API inside ",(0,i.jsx)(n.code,{children:"packages/app/src/apis.ts"}),", which\nvaries depending on which API you're replacing. If you for example are replacing\nthe ",(0,i.jsx)(n.code,{children:"oauth2ApiRef"}),", the factory might look like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// oauth2\ncreateApiFactory({\n  api: acmeAuthApiRef,\n  deps: {\n    discoveryApi: discoveryApiRef,\n    oauthRequestApi: oauthRequestApiRef,\n    configApi: configApiRef,\n  },\n  factory: ({ discoveryApi, oauthRequestApi, configApi }) =>\n    OAuth2.create({\n      discoveryApi,\n      oauthRequestApi,\n      environment: configApi.getOptionalString('auth.environment'),\n    }),\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"Provider specific factory implementations, copy the code you need into the\nfactory method depending on which apiRef you previously used."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// samlAuthApiRef\nSamlAuth.create({\n  discoveryApi,\n  environment: configApi.getOptionalString('auth.environment'),\n});\n\n// oidcAuthApiRef\nOAuth2.create({\n  discoveryApi,\n  oauthRequestApi,\n  provider: {\n    id: 'oidc',\n    title: 'Your Identity Provider',\n    icon: () => null,\n  },\n  environment: configApi.getOptionalString('auth.environment'),\n});\n\n// auth0AuthApiRef\nOAuth2.create({\n  discoveryApi,\n  oauthRequestApi,\n  provider: {\n    id: 'auth0',\n    title: 'Auth0',\n    icon: () => null,\n  },\n  defaultScopes: ['openid', 'email', 'profile'],\n  environment: configApi.getOptionalString('auth.environment'),\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, for the provider to show up in your settings menu, you also need to\nupdate the settings route in ",(0,i.jsx)(n.code,{children:"packages/app/src/App.tsx"})," to pass the\n",(0,i.jsx)(n.code,{children:"acmeAuthApiRef"})," to the ",(0,i.jsx)(n.code,{children:"UserSettingsPage"}),". This replaces all existing provider\nitems, so you might want to add back any of the default ones that you are using\nfrom the\n",(0,i.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/a3ec122170e0205fd3f9c307b98b1c5e4f55bf5f/plugins/user-settings/src/components/AuthProviders/DefaultProviderSettings.tsx#L35",children:"DefaultProviderSettings"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'<Route\n  path="/settings"\n  element={\n    <UserSettingsPage\n      providerSettings={\n        <ProviderSettingsItem\n          title="ACME"\n          description="Provides sign-in via ACME"\n          apiRef={acmeAuthApiRef}\n          icon={Star}\n        />\n      }\n    />\n  }\n/>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},675251:(e,n,t)=>{var i=t(667294),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var i,r={},d=null,p=null;for(i in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(p=n.ref),n)s.call(n,i)&&!c.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:o,type:e,key:d,ref:p,props:r,_owner:a.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(667294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);