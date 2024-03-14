"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8865],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6146:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="Troubleshooting",l={unversionedId:"getting_started/troubleshooting",id:"getting_started/troubleshooting",title:"Troubleshooting",description:"Are you not receiving the call at all?",source:"@site/docs/getting_started/troubleshooting.md",sourceDirName:"getting_started",slug:"/getting_started/troubleshooting",permalink:"/docs/getting_started/troubleshooting",draft:!1,editUrl:"https://github.com/fonoster/website/edit/main/docs/docs/getting_started/troubleshooting.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Make an outbound call",permalink:"/docs/getting_started/make_an_outbound_call"},next:{title:"Feedback",permalink:"/docs/getting_started/feedback"}},u={},c=[{value:"Are you not receiving the call at all?",id:"are-you-not-receiving-the-call-at-all",level:2},{value:"You receive the call but immediately hang up (did not hear a sound)",id:"you-receive-the-call-but-immediately-hang-up-did-not-hear-a-sound",level:2},{value:"More help?",id:"more-help",level:2}],s={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h2",{id:"are-you-not-receiving-the-call-at-all"},"Are you not receiving the call at all?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check is that your SIP Service Provider configuration is correct. "),(0,o.kt)("li",{parentName:"ol"},"Double-check the ",(0,o.kt)("inlineCode",{parentName:"li"},"username"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"password"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"host"),". "),(0,o.kt)("li",{parentName:"ol"},"If your Provider has an Admin console, check if you can see the registration coming from Fonoster."),(0,o.kt)("li",{parentName:"ol"},"Make sure the ",(0,o.kt)("inlineCode",{parentName:"li"},"from")," matches the Number given to you by your Provider and ensure the ",(0,o.kt)("inlineCode",{parentName:"li"},"to")," has the correct prefix (for example, +1).")),(0,o.kt)("h2",{id:"you-receive-the-call-but-immediately-hang-up-did-not-hear-a-sound"},"You receive the call but immediately hang up (did not hear a sound)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Verify that Ngrok is still running. "),(0,o.kt)("li",{parentName:"ol"},"Compare Ngrok's URL with the ",(0,o.kt)("inlineCode",{parentName:"li"},"webhook")," on your Number. Remember they must match.")),(0,o.kt)("p",null,"Then observe the console's output where your Programmable Voice Application is running, and look for any errors."),(0,o.kt)("h2",{id:"more-help"},"More help?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Join our ",(0,o.kt)("a",{parentName:"li",href:"https://discord.gg/4QWgSz4hTC"},"Discord")),(0,o.kt)("li",{parentName:"ul"},"Reach us on Twitter: ",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/fonoster"},"@fonoster"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Github discussions:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fonoster/fonoster/discussions/categories/q-a"},"Q&A")," \u2013 for discussions around Fonoster usage and community support")))}d.isMDXComponent=!0}}]);