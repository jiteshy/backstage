/*! For license information please see 4a7a6d09.8ab011eb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[412347],{752723:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>j,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var s=r(785893),c=r(511151);const t={id:"plugin-kubernetes-common",title:"@backstage/plugin-kubernetes-common",description:"API Reference for @backstage/plugin-kubernetes-common"},i=void 0,d={id:"reference/plugin-kubernetes-common",title:"@backstage/plugin-kubernetes-common",description:"API Reference for @backstage/plugin-kubernetes-common",source:"@site/versioned_docs/version-stable/reference/plugin-kubernetes-common.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-common",permalink:"/docs/reference/plugin-kubernetes-common",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-kubernetes-common.md",tags:[],version:"stable",frontMatter:{id:"plugin-kubernetes-common",title:"@backstage/plugin-kubernetes-common",description:"API Reference for @backstage/plugin-kubernetes-common"}},o={},l=[{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common",children:(0,s.jsx)(n.code,{children:"@backstage/plugin-kubernetes-common"})})]}),"\n",(0,s.jsxs)(n.p,{children:["Common functionalities for Kubernetes, to be shared between the ",(0,s.jsx)(n.code,{children:"kubernetes"})," and ",(0,s.jsx)(n.code,{children:"kubernetes-backend"})," plugins"]}),"\n",(0,s.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Function"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.detecterrors",children:"detectErrors(objects)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"For each cluster try to find errors in each of the object types provided returning a map of cluster names to errors in that cluster"}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.groupresponses",children:"groupResponses(fetchResponse)"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Interface"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clientcontainerstatus",children:"ClientContainerStatus"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clientcurrentresourceusage",children:"ClientCurrentResourceUsage"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clientpodstatus",children:"ClientPodStatus"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clusterattributes",children:"ClusterAttributes"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.clusterobjects",children:"ClusterObjects"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.configmapfetchresponse",children:"ConfigMapFetchResponse"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.cronjobsfetchresponse",children:"CronJobsFetchResponse"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.customobjectsbyentityrequest",children:"CustomObjectsByEntityRequest"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.customresourcefetchresponse",children:"CustomResourceFetchResponse"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.customresourcematcher",children:"CustomResourceMatcher"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.daemonsetsfetchresponse",children:"DaemonSetsFetchResponse"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.deploymentfetchresponse",children:"DeploymentFetchResponse"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.deploymentresources",children:"DeploymentResources"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.detectederror",children:"DetectedError"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Represents an error found on a Kubernetes object"}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.docssolution",children:"DocsSolution"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.errormapper",children:"ErrorMapper"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.eventssolution",children:"EventsSolution"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.groupedresponses",children:"GroupedResponses"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.horizontalpodautoscalersfetchresponse",children:"HorizontalPodAutoscalersFetchResponse"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.ingressesfetchresponse",children:"IngressesFetchResponse"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.jobsfetchresponse",children:"JobsFetchResponse"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetesrequestbody",children:"KubernetesRequestBody"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.limitrangefetchresponse",children:"LimitRangeFetchResponse"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.logsolution",children:"LogSolution"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.objectsbyentityresponse",children:"ObjectsByEntityResponse"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.podfetchresponse",children:"PodFetchResponse"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.podstatusfetchresponse",children:"PodStatusFetchResponse"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.proposedfixbase",children:"ProposedFixBase"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.rawfetcherror",children:"RawFetchError"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.replicasetsfetchresponse",children:"ReplicaSetsFetchResponse"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.resourcequotafetchresponse",children:"ResourceQuotaFetchResponse"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.resourceref",children:"ResourceRef"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"A reference to a Kubernetes object"}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.servicefetchresponse",children:"ServiceFetchResponse"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.statefulsetsfetchresponse",children:"StatefulSetsFetchResponse"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.statuserror",children:"StatusError"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.workloadsbyentityrequest",children:"WorkloadsByEntityRequest"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Variable"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_api_server_ca",children:"ANNOTATION_KUBERNETES_API_SERVER_CA"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Annotation for specifying the Certificate Authority of an API server for a Kubernetes cluster"}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_api_server",children:"ANNOTATION_KUBERNETES_API_SERVER"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Annotation for specifying the API server of a Kubernetes cluster"}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_auth_provider",children:"ANNOTATION_KUBERNETES_AUTH_PROVIDER"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Annotation for specifying the auth provider for a Kubernetes cluster"}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_aws_assume_role",children:"ANNOTATION_KUBERNETES_AWS_ASSUME_ROLE"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Annotation for specifying the assume role use to authenticate with AWS."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_aws_cluster_id",children:"ANNOTATION_KUBERNETES_AWS_CLUSTER_ID"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Annotation for specifying the AWS ID of a cluster when signing STS tokens"}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_aws_external_id",children:"ANNOTATION_KUBERNETES_AWS_EXTERNAL_ID"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Annotation for specifying an external id when communicating with AWS"}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_dashboard_app",children:"ANNOTATION_KUBERNETES_DASHBOARD_APP"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Annotation for specifying the dashboard app for a Kubernetes cluster."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_dashboard_parameters",children:"ANNOTATION_KUBERNETES_DASHBOARD_PARAMETERS"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Annotation for specifying the dashboard app parameters for a Kubernetes cluster."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_dashboard_url",children:"ANNOTATION_KUBERNETES_DASHBOARD_URL"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Annotation for specifying the dashboard url for a Kubernetes cluster."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_oidc_token_provider",children:"ANNOTATION_KUBERNETES_OIDC_TOKEN_PROVIDER"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Annotation for specifying the oidc provider used to get id tokens for a Kubernetes cluster"}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_skip_metrics_lookup",children:"ANNOTATION_KUBERNETES_SKIP_METRICS_LOOKUP"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Annotation for specifying boolean value for skip metric lookup."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.annotation_kubernetes_skip_tls_verify",children:"ANNOTATION_KUBERNETES_SKIP_TLS_VERIFY"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Annotation for specifying boolean value for skip tls verify."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetespermissions",children:"kubernetesPermissions"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"List of all Kubernetes permissions."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetesproxypermission",children:"kubernetesProxyPermission"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"This permission is used to check access to the proxy endpoint"}),"\n"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Type Alias"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.authprovidertype",children:"AuthProviderType"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.detectederrorsbycluster",children:"DetectedErrorsByCluster"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"A list of errors keyed by Cluster name"}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.errorseverity",children:"ErrorSeverity"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Severity of the error, where 10 is critical and 0 is very low."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.fetchresponse",children:"FetchResponse"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kuberneteserrortypes",children:"KubernetesErrorTypes"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetesfetcherror",children:"KubernetesFetchError"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.kubernetesrequestauth",children:"KubernetesRequestAuth"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-common.proposedfix",children:"ProposedFix"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]})]})]})]})}function j(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},675251:(e,n,r)=>{var s=r(667294),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var s,t={},l=null,h=null;for(s in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(h=n.ref),n)i.call(n,s)&&!o.hasOwnProperty(s)&&(t[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===t[s]&&(t[s]=n[s]);return{$$typeof:c,type:e,key:l,ref:h,props:t,_owner:d.current}}n.Fragment=t,n.jsx=l,n.jsxs=l},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>i});var s=r(667294);const c={},t=s.createContext(c);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);