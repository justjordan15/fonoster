"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},c="Create a user account",i={unversionedId:"getting_started/create_an_user_account",id:"getting_started/create_an_user_account",title:"Create a user account",description:"Creating a user account will give you access to the following:",source:"@site/docs/getting_started/create_an_user_account.md",sourceDirName:"getting_started",slug:"/getting_started/create_an_user_account",permalink:"/docs/getting_started/create_an_user_account",draft:!1,editUrl:"https://github.com/fonoster/website/edit/main/docs/docs/getting_started/create_an_user_account.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/getting_started/overview"},next:{title:"Make a Hello World",permalink:"/docs/getting_started/make_a_hello_world"}},l={},s=[{value:"Create a new project",id:"create-a-new-project",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-user-account"},"Create a user account"),(0,a.kt)("p",null,"Creating a user account will give you access to the following: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create and manage Projects"),(0,a.kt)("li",{parentName:"ul"},"Set Trunks, Agents, and Numbers"),(0,a.kt)("li",{parentName:"ul"},"Manage User settings")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You're all set here if you already have a Fonoster account! ",(0,a.kt)("a",{parentName:"p",href:"https://console.fonoster.io"},"Log in"),". Feel free to jump to the next section.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You must ",(0,a.kt)("a",{parentName:"strong",href:"https://console.fonoster.io"},"Sign In")," with GitHub to create a Fonoster account.")),(0,a.kt)("p",null,"Signing In will give you access to the main console, where you can start adding Numbers, Trunks, SIP Agents, Domains, and more. "),(0,a.kt)("p",null,"But before you can get started, you need to create a new Project to obtain the ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessKeyId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessKeySecret"),"."),(0,a.kt)("h2",{id:"create-a-new-project"},"Create a new project"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://console.fonoster.io"},"Sign In")," with your GitHub account and create a New Project"),(0,a.kt)("li",{parentName:"ul"},"Give it a friendly name"),(0,a.kt)("li",{parentName:"ul"},"Click on the New Project to see the overview",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Now you have access to the Dashboard where you can see the credentials ",(0,a.kt)("inlineCode",{parentName:"li"},"AccessKeyId")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"AccessKeySecret"))))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'The Account Credentials are different from those generated for the Project. You can find them by going into the Account settings on the top right of the screen. They will have the "US" prefix (e.g: ',(0,a.kt)("inlineCode",{parentName:"p"},"US618572e3ec11d10600000001"),") ")),(0,a.kt)("p",null,'Now you are all set with the basics of your Fonoster account for the next step and start making calls from NodeJS or play with the Dashboard making your first "Hello World."'))}d.isMDXComponent=!0}}]);