/*! For license information please see b242c8ae.6b59dc44.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[768111],{938180:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var n=s(785893),i=s(511151);const a={id:"v1.31.0",title:"v1.31.0",description:"Backstage Release v1.31.0"},o=void 0,r={id:"releases/v1.31.0",title:"v1.31.0",description:"Backstage Release v1.31.0",source:"@site/versioned_docs/version-stable/releases/v1.31.0.md",sourceDirName:"releases",slug:"/releases/v1.31.0",permalink:"/docs/releases/v1.31.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/releases/v1.31.0.md",tags:[],version:"stable",frontMatter:{id:"v1.31.0",title:"v1.31.0",description:"Backstage Release v1.31.0"},sidebar:"releases",previous:{title:"v1.32.0",permalink:"/docs/releases/v1.32.0"},next:{title:"v1.30.0",permalink:"/docs/releases/v1.30.0"}},c={},d=[{value:"Highlights",id:"highlights",level:2},{value:"Backend System 1.0 \ud83c\udf89",id:"backend-system-10-",level:3},{value:"Technical details",id:"technical-details",level:4},{value:"New Frontend System Updates",id:"new-frontend-system-updates",level:3},{value:"Yarn v4 by Default",id:"yarn-v4-by-default",level:3},{value:"App Runtime Templating",id:"app-runtime-templating",level:3},{value:"Guest auth no longer halting production startup",id:"guest-auth-no-longer-halting-production-startup",level:3},{value:"New Catalog Permissions",id:"new-catalog-permissions",level:3},{value:"GitLab Provider",id:"gitlab-provider",level:3},{value:"Star Icon Overrides",id:"star-icon-overrides",level:3},{value:"Migrated Auth Providers",id:"migrated-auth-providers",level:3},{value:"Catalog Client Performance Improvements",id:"catalog-client-performance-improvements",level:3},{value:"New Catalog Service Mocks",id:"new-catalog-service-mocks",level:3},{value:"Scaffolder Fixes",id:"scaffolder-fixes",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["These are the release notes for the v1.31.0 release of ",(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,n.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,n.jsx)(t.h3,{id:"backend-system-10-",children:"Backend System 1.0 \ud83c\udf89"}),"\n",(0,n.jsxs)(t.p,{children:["The time has come for releasing ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/",children:"the new Backend System"})," as stable version 1.0! This means that the API is now stable and breaking changes should not occur until version 2.0, see our ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy/#package-versioning-policy",children:"package versioning policy"})," for more information about this."]}),"\n",(0,n.jsxs)(t.p,{children:["There is documentation in place both for ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/building-backends/migrating",children:"migrating backends"})," and ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/building-plugins-and-modules/migrating",children:"migrating plugins"}),', and we encourage you to start doing so as soon as possible. Going forward, we will increasingly refer to this as "The backend system", and the previous one as "The old backend system". The main Backstage and ',(0,n.jsx)(t.a,{href:"https://github.com/backstage/community-plugins",children:"community-plugins"})," repositories have already been more or less fully migrated over."]}),"\n",(0,n.jsxs)(t.p,{children:["The backend system brings a host of improvements to the way that backends and their features are constructed. Instead of the old convention-based structure that could lead to migration pains, features now fit together with dependency injection like a jigsaw puzzle while leveraging powerful core services and extending each other dynamically with additional behaviors. And this is just scratching the surface of it - do check out ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/",children:"the docs"}),"!"]}),"\n",(0,n.jsx)(t.p,{children:"We are very excited about this important milestone after a long period of development and refinement together with our passionate community, and hope that you will find it as refreshing and simple yet powerful as it was envisioned to be. This also lays the foundation for us being able to continue iterating at a high pace without incurring undue end user breakages during upgrades."}),"\n",(0,n.jsxs)(t.p,{children:["Keep the feedback coming! Either on the ",(0,n.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"}),", or ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new/choose",children:"through issues"})," on GitHub. Also if you\u2019re looking for a way to help, please take a look at these ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/26353",children:"backstage"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/community-plugins/issues/1176",children:"community plugins"})," issues about deprecating old-backend capabilities of already migrated plugins."]}),"\n",(0,n.jsx)(t.h4,{id:"technical-details",children:"Technical details"}),"\n",(0,n.jsx)(t.p,{children:"At a technical level, the following packages are now on major version 1, and their major version 0 will stop receiving feature updates:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"@backstage/backend-app-api"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"@backstage/backend-plugin-api"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"@backstage/backend-test-utils"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The following packages are deprecated and frozen (have stopped receiving updates). Please use the above three packages and ",(0,n.jsx)(t.code,{children:"@backstage/backend-defaults"})," to replace them. You may still use the compatibility adapters in ",(0,n.jsx)(t.code,{children:"@backstage/backend-common"})," short term while performing a gradual migration."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"@backstage/backend-common"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"@backstage/backend-tasks"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The following core services have been entirely removed. Please migrate to the ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/tutorials/auth-service-migration/",children:"new auth system"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"coreServices.identity"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"coreServices.tokenManager"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The backwards compatibility with plugins using legacy auth through the token manager service has also been removed. This means that instead of falling back to using the old token manager, requests towards plugins that don't support the new auth system will simply fail. Please make sure that all plugins in your deployment are hosted within a backend instance from the new backend system; a mixture of new and old will lead to auth problems."}),"\n",(0,n.jsxs)(t.p,{children:["For a lot more detail about what changed and what migration steps might be needed, check the release notes for versions ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/next/releases/v1.27.0#backend-system-deprecations",children:"1.27"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/next/releases/v1.28.0#new-backend-system-api-movement-towards-10-release",children:"1.28"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/next/releases/v1.29.0#breaking-backend-system-deprecations-and-removals",children:"1.29"})," and ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/releases/v1.30.0#breaking-backend-system-deprecations-and-removals",children:"1.30"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"new-frontend-system-updates",children:"New Frontend System Updates"}),"\n",(0,n.jsxs)(t.p,{children:["Some new things have landed in this version for the continued work on the New Frontend System. We\u2019ve introduced the ",(0,n.jsx)(t.code,{children:"@backstage/plugin-app"})," package, which is now responsible for housing the built in extensions and providing an entry point to override them using ",(0,n.jsx)(t.code,{children:"appPlugin.override()"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["There\u2019s a new round of deprecations as we move forward with the New Frontend System. Namespace is no longer required to be provided to all extensions, or Blueprints and their respective ",(0,n.jsx)(t.code,{children:".make"})," or ",(0,n.jsx)(t.code,{children:".makeWithOverrides"})," methods. This will now default to the ID of the plugin that they are installed alongside."]}),"\n",(0,n.jsxs)(t.p,{children:["We\u2019ve deprecated ",(0,n.jsx)(t.code,{children:"createExtensionOverrides"})," and introduced a new ",(0,n.jsx)(t.code,{children:"createFrontendModule"})," method which replaces it and takes a required ",(0,n.jsx)(t.code,{children:"pluginId"})," for which to associate the extensions that you\u2019re providing to override or compliment the corresponding plugin."]}),"\n",(0,n.jsxs)(t.p,{children:["We\u2019ve also deprecated the ",(0,n.jsx)(t.code,{children:"createApp"})," import from ",(0,n.jsx)(t.code,{children:"@backstage/frontend-app-api"})," and you should now use the same import from ",(0,n.jsx)(t.code,{children:"@backstage/frontend-defaults"})," instead which aligns nicely to the New Backend System patterns."]}),"\n",(0,n.jsxs)(t.p,{children:["There\u2019s more information on the above deprecations and migrations in the ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/frontend-system/architecture/migrations#131",children:"1.31 migration docs"})]}),"\n",(0,n.jsx)(t.p,{children:"We\u2019ve removed V1 extension support, so all extensions should now be defined with the array form of outputs, instead of the previously deprecated object form."}),"\n",(0,n.jsxs)(t.p,{children:["All previous extension creators that have the Blueprint equivalent have also been removed as they were previously deprecated. Instead of ",(0,n.jsx)(t.code,{children:"create<Kind>Extension"})," you should migrate to using ",(0,n.jsx)(t.code,{children:"<Kind>Blueprint.make"})," instead."]}),"\n",(0,n.jsxs)(t.p,{children:["Also the deprecated ",(0,n.jsx)(t.code,{children:".render"})," method has been removed from ",(0,n.jsx)(t.code,{children:"createExtensionTester"}),", you should be able to use ",(0,n.jsx)(t.code,{children:"renderInTestApp"})," directly with the ",(0,n.jsx)(t.code,{children:"tester.reactElement()"})," instead."]}),"\n",(0,n.jsxs)(t.p,{children:["There\u2019s also ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/frontend-system/architecture/migrations#130",children:"migration docs"})," for the above removals from the last deprecation ICYMI!"]}),"\n",(0,n.jsx)(t.h3,{id:"yarn-v4-by-default",children:"Yarn v4 by Default"}),"\n",(0,n.jsxs)(t.p,{children:["When creating a new Backstage repository with ",(0,n.jsx)(t.code,{children:"@backstage/create-app"}),", it will now be powered by Yarn version 4. There have been several improvements in later versions of Yarn, so this should improve the experience when getting started."]}),"\n",(0,n.jsxs)(t.p,{children:["If you are still on version 1 in your pre-existing repository, there\u2019s ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/tutorials/yarn-migration/",children:"a guide"})," for getting onto newer releases. At this point we recommend moving ahead with moving off of version 1 of Yarn."]}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/awanlin",children:"@awanlin"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/26610",children:"#26610"})]}),"\n",(0,n.jsx)(t.h3,{id:"app-runtime-templating",children:"App Runtime Templating"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"@backstage/plugin-app-backend"})," now supports injection of all parts of the frontend configuration at runtime, including the public path and configuration values that are templated into ",(0,n.jsx)(t.code,{children:"index.html"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The build process for frontend apps in the ",(0,n.jsx)(t.code,{children:"@backstage/cli"})," now outputs an additional ",(0,n.jsx)(t.code,{children:"index.html.tmpl"})," file. If this file is present in the build, the ",(0,n.jsx)(t.code,{children:"app"})," backend will use this file to template a new ",(0,n.jsx)(t.code,{children:"index.html"})," using the configuration that\u2019s present in the ",(0,n.jsx)(t.code,{children:"app"})," backend. This change also switches the full frontend configuration to be injected directly into the ",(0,n.jsx)(t.code,{children:"index.html"})," file inside a ",(0,n.jsx)(t.code,{children:"script"})," tag, rather than deep in the static resources."]}),"\n",(0,n.jsx)(t.h3,{id:"guest-auth-no-longer-halting-production-startup",children:"Guest auth no longer halting production startup"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"@backstage/plugin-auth-backend-module-guest-provider"})," module will no longer cause the backend to fail to start up in production, it now instead refuses authentication attempts. The halting of the startup could lead to knock-on effects such as migration tables staying locked."]}),"\n",(0,n.jsx)(t.h3,{id:"new-catalog-permissions",children:"New Catalog Permissions"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"analyze-location"})," endpoint of the catalog is now protected by the ",(0,n.jsx)(t.code,{children:"catalog.location.analyze"})," permission, and the ",(0,n.jsx)(t.code,{children:"validate-entity"})," endpoint is now protected by the ",(0,n.jsx)(t.code,{children:"catalog.entity.validate"})," permission. If you have enabled the ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/permissions/overview",children:"permissions system"}),", you may want to adjust your policy accordingly."]}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/04kash",children:"@04kash"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/25924",children:"#25924"})]}),"\n",(0,n.jsx)(t.h3,{id:"gitlab-provider",children:"GitLab Provider"}),"\n",(0,n.jsxs)(t.p,{children:["The GitLab org entity provider now has a new ",(0,n.jsx)(t.code,{children:"relations"})," configuration option that controls how GitLab memberships are modeled in Backstage. As part of this change the existing ",(0,n.jsx)(t.code,{children:"allowInherited"})," option has been deprecated as it can now be expressed as ",(0,n.jsx)(t.code,{children:"relations: [INHERITED]"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/elaine-mattos",children:"@elaine-mattos"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/25363",children:"#25363"})]}),"\n",(0,n.jsx)(t.h3,{id:"star-icon-overrides",children:"Star Icon Overrides"}),"\n",(0,n.jsxs)(t.p,{children:["Allow custom star icons to be provided via the star and unstarred icon overrides. See how to override existing icons in the ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/app-custom-theme/#custom-icons",children:"Backstage documentation"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"migrated-auth-providers",children:"Migrated Auth Providers"}),"\n",(0,n.jsxs)(t.p,{children:["The last two backend auth providers - Auth0 and BitBucket Server - were migrated to new backend modules, closing the big community effort in getting the ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/19476",children:"auth providers migration"})," done."]}),"\n",(0,n.jsx)(t.p,{children:"Thanks again to everyone who helped out, it is greatly appreciated!"}),"\n",(0,n.jsx)(t.h3,{id:"catalog-client-performance-improvements",children:"Catalog Client Performance Improvements"}),"\n",(0,n.jsx)(t.p,{children:"A hotspot was found in the code, where calls to the catalog backend to fetch entities performed work on the client side that were better done on the server side. After this update, you may see significant reduction in CPU usage on callers that fetch large amounts of data from the catalog."}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/drodil",children:"@drodil"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/26240",children:"#26240"})]}),"\n",(0,n.jsx)(t.h3,{id:"new-catalog-service-mocks",children:"New Catalog Service Mocks"}),"\n",(0,n.jsxs)(t.p,{children:["When testing features that interact with the catalog, it\u2019s common to want to inject a mocked or faked catalog client. To make life simpler, we\u2019ve added a ",(0,n.jsx)(t.code,{children:"catalogServiceMock"})," to ",(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-node/testUtils"}),". Just like many of the ",(0,n.jsx)(t.code,{children:"mockServices"})," from the test backend utilities, it lets you create partial mocks to make assertions on, as well as entire fake catalogs pre-populated with a static set of entities. Check it out!"]}),"\n",(0,n.jsx)(t.h3,{id:"scaffolder-fixes",children:"Scaffolder Fixes"}),"\n",(0,n.jsxs)(t.p,{children:["Added support for ",(0,n.jsx)(t.code,{children:"liveOmit"})," and ",(0,n.jsx)(t.code,{children:"omitExtraData"})," options to the form which will allow for trimming superfluous data from the resulting data collected from the user. We will be testing this one for this release and promote this as the default if all goes to plan for the next mainline release. Thanks ",(0,n.jsx)(t.a,{href:"https://github.com/jboeijenga",children:"@jboeijenga"}),"!"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/stephenglass",children:"@stepghenglass"})," has been on a roll, and contributed a bunch of fixes for the Scaffolder and the ",(0,n.jsx)(t.code,{children:"SecretField"}),". It now supports being ",(0,n.jsx)(t.code,{children:"disabled"}),", ",(0,n.jsx)(t.code,{children:"required"})," and ",(0,n.jsx)(t.code,{children:"maxLength"})," and ",(0,n.jsx)(t.code,{children:"minLength"})," being set from the schema. They\u2019ve also contributed some fixes for the ",(0,n.jsx)(t.code,{children:"ReviewState"})," component, to correctly parse the ",(0,n.jsx)(t.code,{children:"ui:backstage"})," options for nested fields in the parameters schema. Thanks to ",(0,n.jsx)(t.a,{href:"https://github.com/richcooper95",children:"@richcooper95"})," for some other improvements to that component too and making it look much better when you have nested properties in the summary \ud83d\udc85."]}),"\n",(0,n.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Fix in the Catalog backend where a vulnerability could be exploited to disrupt the backend instance availability."}),"\n",(0,n.jsx)(t.li,{children:"A fix for a vulnerability in the TechDocs backend that could allow unauthorized access to TechDocs content when hosting the content externally."}),"\n",(0,n.jsx)(t.li,{children:"A fix for a vulnerability in the TechDocs backend that could allow authenticated users to bypass script injection protections."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,n.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,n.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage's ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.31.0-changelog.md",children:"Changelog"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage ",(0,n.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,n.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Sign up for our ",(0,n.jsx)(t.a,{href:"https://info.backstage.spotify.com/newsletter_subscribe",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,t,s)=>{var n=s(667294),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var n,a={},d=null,l=null;for(n in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:i,type:e,key:d,ref:l,props:a,_owner:r.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},785893:(e,t,s)=>{e.exports=s(675251)},511151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>o});var n=s(667294);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);