"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),i=c(n),d=a,k=i["".concat(o,".").concat(d)]||i[d]||m[d]||l;return n?r.createElement(k,u(u({ref:t},p),{},{components:n})):r.createElement(k,u({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[i]="string"==typeof e?e:a,u[1]=s;for(var c=2;c<l;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},u=void 0,s={unversionedId:"reference/Funcs",id:"reference/Funcs",title:"Funcs",description:"Funcs \u21d0 APIClient",source:"@site/docs/reference/Funcs.md",sourceDirName:"reference",slug:"/reference/Funcs",permalink:"/docs/reference/Funcs",draft:!1,editUrl:"https://github.com/fonoster/website/edit/main/docs/docs/reference/Funcs.md",tags:[],version:"current",frontMatter:{}},o={},c=[{value:"Funcs \u21d0 <code>APIClient</code>",id:"funcs--apiclient",level:2},{value:"new Funcs(options)",id:"new-funcsoptions",level:3},{value:"funcs.deployFunc(request) \u21d2 <code>Promise.&lt;DeployStream&gt;</code>",id:"funcsdeployfuncrequest--promisedeploystream",level:3},{value:"funcs.getFunc(request) \u21d2 <code>Promise.&lt;GetFuncResponse&gt;</code>",id:"funcsgetfuncrequest--promisegetfuncresponse",level:3},{value:"funcs.deleteFunc(request) \u21d2 <code>Promise.&lt;GetFuncResponse&gt;</code>",id:"funcsdeletefuncrequest--promisegetfuncresponse",level:3},{value:"funcs.listFuncs(request) \u21d2 <code>Promise.&lt;ListFuncsResponse&gt;</code>",id:"funcslistfuncsrequest--promiselistfuncsresponse",level:3},{value:"funcs.getFuncLogs(request) \u21d2 <code>Promise.&lt;LogsStream&gt;</code>",id:"funcsgetfunclogsrequest--promiselogsstream",level:3}],p={toc:c},i="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"Funcs"}),(0,a.kt)("h2",{id:"funcs--apiclient"},"Funcs \u21d0 ",(0,a.kt)("code",null,"APIClient")),(0,a.kt)("p",null,"Use Fonoster Funcs, a capability of FaaS subsystem,\nto deploy, update, get and delete functions. Fonoster Funcs requires of a\nrunning Fonoster deployment and FaaS."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Extends"),": ",(0,a.kt)("code",null,"APIClient"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"See"),": module:core:APIClient  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Funcs"},"Funcs")," \u21d0 ",(0,a.kt)("code",null,"APIClient"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#new_Funcs_new"},"new Funcs(options)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Funcs+deployFunc"},".deployFunc(request)")," \u21d2 ",(0,a.kt)("code",null,"Promise.","<","DeployStream",">")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Funcs+getFunc"},".getFunc(request)")," \u21d2 ",(0,a.kt)("code",null,"Promise.","<","GetFuncResponse",">")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Funcs+deleteFunc"},".deleteFunc(request)")," \u21d2 ",(0,a.kt)("code",null,"Promise.","<","GetFuncResponse",">")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Funcs+listFuncs"},".listFuncs(request)")," \u21d2 ",(0,a.kt)("code",null,"Promise.","<","ListFuncsResponse",">")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Funcs+getFuncLogs"},".getFuncLogs(request)")," \u21d2 ",(0,a.kt)("code",null,"Promise.","<","LogsStream",">"))))),(0,a.kt)("a",{name:"new_Funcs_new"}),(0,a.kt)("h3",{id:"new-funcsoptions"},"new Funcs(options)"),(0,a.kt)("p",null,"Constructs a new Funcs object."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"ClientOptions")),(0,a.kt)("td",{parentName:"tr",align:null},"Options to indicate the objects endpoint")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const request = {\n  name: "function1",\n  path: "/path/to/function",\n};\n\nfuncs.deployFunc(request)\n.then(stream => {\n  stream.onMessage(msg => console.log(msg))\n  stream.onFinish(() => console.log("end"))\n  stream.onError(e => console.error(e))\n}).catch(e => console.error(e));   // an error occurred\n')),(0,a.kt)("a",{name:"Funcs+deployFunc"}),(0,a.kt)("h3",{id:"funcsdeployfuncrequest--promisedeploystream"},"funcs.deployFunc(request) \u21d2 ",(0,a.kt)("code",null,"Promise.","<","DeployStream",">")),(0,a.kt)("p",null,"Creates or updates a function in the FaaS subsystem."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#Funcs"},(0,a.kt)("code",null,"Funcs")),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"DeployFuncRequest")),(0,a.kt)("td",{parentName:"tr",align:null},"Request to create or update a function")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.path"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Path to the function.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.name"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Unique function name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.schedule"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Unique function name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.limit.memory"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional limit for function's memory utilization")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.limit.cpu"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional limit for function's cpu utilization")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.requests.memory"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional requested memory allocation for the function")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.requests.cpu"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional requested cpu allocation for the function")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const Fonoster = require("@fonoster/sdk");\nconst funcs = new Fonoster.Funcs();\n\nconst request = {\n  name: "function1",\n  schedule: "* * * * *",  // Intervals using standard cron syntax\n  path: "/path/to/function",\n  limits: {\n     cpu: 100m,\n     memory: 40Mi\n  },\n  requests: {\n     cpu: 100m,\n     memory: 40Mi\n  }\n};\n\nfuncs.deployFunc(request)\n.then(stream => {\n  stream.onMessage(msg => console.log(msg))\n  stream.onFinish(() => console.log("end"))\n  stream.onError(e => console.error(e))\n}).catch(e => console.error(e));   // an error occurred\n')),(0,a.kt)("a",{name:"Funcs+getFunc"}),(0,a.kt)("h3",{id:"funcsgetfuncrequest--promisegetfuncresponse"},"funcs.getFunc(request) \u21d2 ",(0,a.kt)("code",null,"Promise.","<","GetFuncResponse",">")),(0,a.kt)("p",null,"Gets a system function by name."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#Funcs"},(0,a.kt)("code",null,"Funcs")),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"GetFuncRequest")),(0,a.kt)("td",{parentName:"tr",align:null},"Request to get a function")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.name"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Unique function name")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const request = {\n  name: "function1"\n};\n\nfuncs.getFunc(request)\n.then(result => {\n  console.log(result)              // successful response with the function as the body65\n}).catch(e => console.error(e));   // an error occurred\n')),(0,a.kt)("a",{name:"Funcs+deleteFunc"}),(0,a.kt)("h3",{id:"funcsdeletefuncrequest--promisegetfuncresponse"},"funcs.deleteFunc(request) \u21d2 ",(0,a.kt)("code",null,"Promise.","<","GetFuncResponse",">")),(0,a.kt)("p",null,"Removes a function by its name."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#Funcs"},(0,a.kt)("code",null,"Funcs")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Note"),": This action will remove all function statistics.  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"DeleteFuncRequest")),(0,a.kt)("td",{parentName:"tr",align:null},"Request to delete a function")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.name"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Unique function name")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const request = {\n  name: "function1"\n};\n\nfuncs.deleteFunc(request)\n.then(result => {\n  console.log(result)              // returns the name of the function\n}).catch(e => console.error(e));   // an error occurred\n')),(0,a.kt)("a",{name:"Funcs+listFuncs"}),(0,a.kt)("h3",{id:"funcslistfuncsrequest--promiselistfuncsresponse"},"funcs.listFuncs(request) \u21d2 ",(0,a.kt)("code",null,"Promise.","<","ListFuncsResponse",">")),(0,a.kt)("p",null,"Returns a list of functions owned by the User."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#Funcs"},(0,a.kt)("code",null,"Funcs")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Promise.","<","ListFuncsResponse",">")," - List of Functions  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"ListFuncsRequest")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.pageSize"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"Number of element per page (defaults to 20)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.pageToken"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The next_page_token value returned from a previous List request, if any")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const request = {\n   pageSize: 20,\n   pageToken: 2\n};\n\nfuncs.listFuncs(request)\n.then(() => {\n  console.log(result)             // returns a ListFuncsResponse object\n}).catch(e => console.error(e));  // an error occurred\n")),(0,a.kt)("a",{name:"Funcs+getFuncLogs"}),(0,a.kt)("h3",{id:"funcsgetfunclogsrequest--promiselogsstream"},"funcs.getFuncLogs(request) \u21d2 ",(0,a.kt)("code",null,"Promise.","<","LogsStream",">")),(0,a.kt)("p",null,"Creates or updates a function in the FaaS subsystem."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,a.kt)("a",{parentName:"p",href:"#Funcs"},(0,a.kt)("code",null,"Funcs")),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"GetFuncLogsRequest")),(0,a.kt)("td",{parentName:"tr",align:null},"Request to obtain the logs for a function")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.name"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Function name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.since"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Only return logs after a specific date (RFC3339)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.tail"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the maximum number of log messages to return, <=0 means unlimited")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request.follow"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"When true, the request will stream logs until the request timeout")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const Fonoster = require("@fonoster/sdk");\nconst funcs = new Fonoster.Funcs();\n\nconst request = {\n  name: "function1",\n  tail: 10,\n  follow: true,\n  since: "2021-05-12T07:20:50.52Z"\n};\n\nfuncs.getFuncLogs(request)\n.then(stream => {\n  stream.onMessage(log => console.log(log))\n  stream.onFinish(() => console.log("end"))\n  stream.onError(e => console.error(e))\n}).catch(e => console.error(e));   // an error occurred\n')))}m.isMDXComponent=!0}}]);