"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"reference/Domains",id:"reference/Domains",title:"Domains",description:"Domains \u21d0 APIClient",source:"@site/docs/reference/Domains.md",sourceDirName:"reference",slug:"/reference/Domains",permalink:"/docs/reference/Domains",draft:!1,editUrl:"https://github.com/fonoster/website/edit/main/docs/docs/reference/Domains.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Numbers",permalink:"/docs/reference/Numbers"},next:{title:"Agents",permalink:"/docs/reference/Agents"}},s={},m=[{value:"Domains \u21d0 <code>APIClient</code>",id:"domains--apiclient",level:2},{value:"new Domains(options)",id:"new-domainsoptions",level:3},{value:"domains.createDomain(request) \u21d2 <code>Promise.&lt;CreateDomainResponse&gt;</code>",id:"domainscreatedomainrequest--promisecreatedomainresponse",level:3},{value:"domains.getDomain(ref) \u21d2 <code>Promise.&lt;GetDomainResponse&gt;</code>",id:"domainsgetdomainref--promisegetdomainresponse",level:3},{value:"domains.updateDomain(request) \u21d2 <code>Promise.&lt;UpdateDomainResponse&gt;</code>",id:"domainsupdatedomainrequest--promiseupdatedomainresponse",level:3},{value:"domains.listDomains(request) \u21d2 <code>Promise.&lt;ListDomainsResponse&gt;</code>",id:"domainslistdomainsrequest--promiselistdomainsresponse",level:3},{value:"domains.deleteDomain(ref)",id:"domainsdeletedomainref",level:3}],p={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"Domains"}),(0,r.kt)("h2",{id:"domains--apiclient"},"Domains \u21d0 ",(0,r.kt)("code",null,"APIClient")),(0,r.kt)("p",null,"Use Fonoster Domains, a capability of Fonoster SIP Proxy Subsystem,\nto create, update, get and delete Domains. The API requires of a running\nFonoster deployment."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Extends"),": ",(0,r.kt)("code",null,"APIClient"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"See"),": module:core:APIClient  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Domains"},"Domains")," \u21d0 ",(0,r.kt)("code",null,"APIClient"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_Domains_new"},"new Domains(options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Domains+createDomain"},".createDomain(request)")," \u21d2 ",(0,r.kt)("code",null,"Promise.","<","CreateDomainResponse",">")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Domains+getDomain"},".getDomain(ref)")," \u21d2 ",(0,r.kt)("code",null,"Promise.","<","GetDomainResponse",">")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Domains+updateDomain"},".updateDomain(request)")," \u21d2 ",(0,r.kt)("code",null,"Promise.","<","UpdateDomainResponse",">")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Domains+listDomains"},".listDomains(request)")," \u21d2 ",(0,r.kt)("code",null,"Promise.","<","ListDomainsResponse",">")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Domains+deleteDomain"},".deleteDomain(ref)"))))),(0,r.kt)("a",{name:"new_Domains_new"}),(0,r.kt)("h3",{id:"new-domainsoptions"},"new Domains(options)"),(0,r.kt)("p",null,"Constructs a new Domains object."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"ClientOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"Options to indicate the objects endpoint")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const Fonoster = require("@fonoster/sdk");\nconst domains = new Fonoster.Domains();\n\ndomains.createDomain({name: "Local Domain", domainUri: "sip.local"...})\n.then(result => {\n  console.log(result)             // successful response\n}).catch(e => console.error(e));   // an error occurred\n')),(0,r.kt)("a",{name:"Domains+createDomain"}),(0,r.kt)("h3",{id:"domainscreatedomainrequest--promisecreatedomainresponse"},"domains.createDomain(request) \u21d2 ",(0,r.kt)("code",null,"Promise.","<","CreateDomainResponse",">")),(0,r.kt)("p",null,"Creates a new Domain on the SIP Proxy subsystem."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#Domains"},(0,r.kt)("code",null,"Domains")),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"CreateDomainRequest")),(0,r.kt)("td",{parentName:"tr",align:null},"Request for the provision of a new Domain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request.name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Friendly name for the SIP domain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request.domainUri"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Domain URI. FQDN is recommended")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request.egressNumberRef"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"A valid reference to a Number in Fonos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request.egressRule"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Regular expression indicating when a call will be routed via request.egressNumberRef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request.accessDeny"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional list of IPs or networks that cannot communicate with this Domain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request.accessAllow"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional list of IPs or networks allow if request.accessDeny is defined")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const request = {\n   name: "Local Domain",\n   domainUri: "sip.local",\n   egressRule: ".*",\n   egressNumberRef: "cb8V0CNTfH",\n   accessDeny: ["0.0.0.0/1"]     // Deny all\n   accessAllow: ["192.168.1.0/255.255.255.0", "192.168.0.1/31"]\n};\n\ndomains.createDomain(request)\n.then(result => {\n  console.log(result) // returns the CreateDomainResponse interface\n}).catch(e => console.error(e)); // an error occurred\n')),(0,r.kt)("a",{name:"Domains+getDomain"}),(0,r.kt)("h3",{id:"domainsgetdomainref--promisegetdomainresponse"},"domains.getDomain(ref) \u21d2 ",(0,r.kt)("code",null,"Promise.","<","GetDomainResponse",">")),(0,r.kt)("p",null,"Retrives a Domain by its reference."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#Domains"},(0,r.kt)("code",null,"Domains")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"Promise.","<","GetDomainResponse",">")," - The domain",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Throws"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if ref is null or Domain does not exist")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ref"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Reference to Domain")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const ref = "Nx05y-ldZa";\n\ndomains.getDomain(ref)\n.then(result => {\n  console.log(result) // returns the CreateGetResponse interface\n}).catch(e => console.error(e)); // an error occurred\n')),(0,r.kt)("a",{name:"Domains+updateDomain"}),(0,r.kt)("h3",{id:"domainsupdatedomainrequest--promiseupdatedomainresponse"},"domains.updateDomain(request) \u21d2 ",(0,r.kt)("code",null,"Promise.","<","UpdateDomainResponse",">")),(0,r.kt)("p",null,"Update a Domain at the SIP Proxy subsystem."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#Domains"},(0,r.kt)("code",null,"Domains")),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"UpdateDomainRequest")),(0,r.kt)("td",{parentName:"tr",align:null},"Request for the update of an existing Domain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request.ref"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"To update a Domain you must provide its reference")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request.name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Friendly name for the SIP domain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request.egressNumberRef"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"A valid reference to a Number in Fonos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request.egressRule"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Regular expression indicating when a call will be routed via request.egressNumberRef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request.accessDeny"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional list of IPs or networks that cannot communicate with this Domain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request.accessAllow"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Optiona list of IPs or networks allow if request.accessDeny is defined")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const request = {\n   ref: "Nx05y-ldZa",\n   name: "Office Domain",\n   accessAllow: ["192.168.1.0/255.255.255.0", "192.168.0.1/31"]\n};\n\ndomains.updateDomain(request)\n.then(result => {\n  console.log(result) // returns the UpdateDomainResponse interface\n}).catch(e => console.error(e)); // an error occurred\n')),(0,r.kt)("a",{name:"Domains+listDomains"}),(0,r.kt)("h3",{id:"domainslistdomainsrequest--promiselistdomainsresponse"},"domains.listDomains(request) \u21d2 ",(0,r.kt)("code",null,"Promise.","<","ListDomainsResponse",">")),(0,r.kt)("p",null,"List the Domains registered in Fonoster SIP Proxy subsystem."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#Domains"},(0,r.kt)("code",null,"Domains")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"Promise.","<","ListDomainsResponse",">")," - Paginated list of Domains  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"ListDomainsRequest")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional parameter with size and token for the request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request.pageSize"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of element per page (defaults to 20)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request.pageToken"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The next_page_token value returned from a previous List request if any")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const request = {\n   pageSize: 20,\n   pageToken: 2\n};\n\ndomains.listDomains(request)\n.then(() => {\n  console.log(result)            // returns a ListDomainsResponse interface\n}).catch(e => console.error(e));  // an error occurred\n")),(0,r.kt)("a",{name:"Domains+deleteDomain"}),(0,r.kt)("h3",{id:"domainsdeletedomainref"},"domains.deleteDomain(ref)"),(0,r.kt)("p",null,"Deletes a Domain from SIP Proxy subsystem. Notice, that in order to delete\na Domain, you must first delete all it's Agents."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#Domains"},(0,r.kt)("code",null,"Domains")),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ref"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Reference to the Domain you wish to delete")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const ref = "Nx05y-ldZa";\n\ndomains.deleteDomain(ref)\n.then(() => {\n  console.log("done")            // returns a reference of the domain\n}).catch(e => console.error(e));  // an error occurred\n')))}d.isMDXComponent=!0}}]);