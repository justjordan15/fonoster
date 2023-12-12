"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={slug:"How we created an open-source alternative to Twilio and why it matters",title:"How we created an open-source alternative to Twilio and why it matters",authors:["psanders"],tags:["fonoster","voice","javascript","voice"]},i="How we created an open-source alternative to Twilio and why it matters",s={permalink:"/blog/How we created an open-source alternative to Twilio and why it matters",editUrl:"https://github.com/fonoster/website/edit/main/docs/blog/blog/2022-10-05-How_we_created_an_open_source_alternative_to_Twilio_and_why.md",source:"@site/blog/2022-10-05-How_we_created_an_open_source_alternative_to_Twilio_and_why.md",title:"How we created an open-source alternative to Twilio and why it matters",description:"Last year, when I started assembling Team Fonoster, I published a post on Reddit that sparked a great conversation and placed Fonoster on Github's trending list even though we didn't have much to show.",date:"2022-10-05T00:00:00.000Z",formattedDate:"October 5, 2022",tags:[{label:"fonoster",permalink:"/blog/tags/fonoster"},{label:"voice",permalink:"/blog/tags/voice"},{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:3.945,hasTruncateMarker:!1,authors:[{name:"Pedro Sanders",title:"CTO at Fonoster",url:"https://github.com/psanders",imageURL:"https://github.com/psanders.png",key:"psanders"}],frontMatter:{slug:"How we created an open-source alternative to Twilio and why it matters",title:"How we created an open-source alternative to Twilio and why it matters",authors:["psanders"],tags:["fonoster","voice","javascript","voice"]},prevItem:{title:"Accessibility in Open Source",permalink:"/blog/Accessibility in Open Source"},nextItem:{title:"Deploying Fonoster with Cloud-Init",permalink:"/blog/Deploying Fonoster with Cloud-Init"}},l={authorsImageUrls:[void 0]},c=[{value:"Why we needed CPaaS in the first place?",id:"why-we-needed-cpaas-in-the-first-place",level:2},{value:"So what&#39;s wrong with traditional CPaaS?",id:"so-whats-wrong-with-traditional-cpaas",level:2},{value:"How can we make this better?",id:"how-can-we-make-this-better",level:2},{value:"What&#39;s next?",id:"whats-next",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Last year, when I started assembling Team Fonoster, I published a ",(0,o.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/Entrepreneur/comments/j96avf/an_opensource_alternative_to_twilio/"},"post")," on Reddit that sparked a great conversation and placed Fonoster on Github's trending list even though we didn't have much to show."),(0,o.kt)("p",null,"As a result, I had the opportunity to interview dozens of CTOs from companies worldwide and speak with several investors who were interested in the idea of an open-source stack of Programmable Telecommunications."),(0,o.kt)("p",null,"In the interviews, I found we need an innovative approach to a cloud-based stack for Programmable Telecommunications."),(0,o.kt)("h2",{id:"why-we-needed-cpaas-in-the-first-place"},"Why we needed CPaaS in the first place?"),(0,o.kt)("p",null,"Building an application that takes advantage of the existing Telecom network has always been a difficult task compared with, for example, building a web-based application."),(0,o.kt)("p",null,"This is difficult because it involves a particular set of skills that is challenging to find and can get really costly."),(0,o.kt)("p",null,"Let's face it, no one wants to read through dozens of RFCs to program a phone call."),(0,o.kt)("p",null,"So, when the API era arrived along with UCaaS and CPaaS providers, it was a no-brainer to use one of those providers to deploy a solution within weeks instead of spending months only to get a simple use-case."),(0,o.kt)("h2",{id:"so-whats-wrong-with-traditional-cpaas"},"So what's wrong with traditional CPaaS?"),(0,o.kt)("p",null,"There is nothing wrong with traditional CPaaS. In fact, in most cases, using a CPaaS is a great option to deploy a Telecommunications solution."),(0,o.kt)("p",null,"However, even though the concept of using a CPaaS to go to market quickly is fantastic, it comes at a high price for some use-cases. After all, if something goes wrong, you will have no other option but to migrate to another CPaaS or build your own solution and start again on square zero."),(0,o.kt)("p",null,"Some companies complain about the high prices for using a CPaaS. A startup CTO once told me, \u201cIt almost feels that we are paying for a lot of features we don't need.\u201d This is because, with a traditional CPaaS, you start on a pay-as-you-go model, but costs can quickly get out of control."),(0,o.kt)("p",null,"Other companies find themselves limited by their providers' features because with traditional CPaaS you have no option but to use what they have available. There is no chance for customization. And even though that's not a problem for most companies, it is a deal-breaker for technology companies."),(0,o.kt)("p",null,"Then you have use-cases, especially in the healthcare industry, that can't benefit from using a traditional CPaaS due to privacy concerns and local regulations."),(0,o.kt)("p",null,"In which of those categories does your company fall?"),(0,o.kt)("h2",{id:"how-can-we-make-this-better"},"How can we make this better?"),(0,o.kt)("p",null,"The primary innovation of Fonoster lies in researching and developing the means for creating a highly portable, cloud-based Programmable Telecommunications stack."),(0,o.kt)("p",null,"This Programmable Telecommunications stack will allow businesses to call an API to dial, answer a call, establish a video session, send SMS, etc. There won't be any concern about what servers and networks are doing with that information in the background."),(0,o.kt)("p",null,"Our overall approach to building Fonoster is to use existing open-source solutions that are best in their class when possible and build our own when necessary. We then integrate this individual open-source software into a cohesive set of APIs that resembles a traditional CPaaS."),(0,o.kt)("p",null,"For example, to start a simple Voice Application one could write a Javascript code like the one below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-none"},'const { VoiceServer } = require("@fonoster/voice");\n\nconst serverConfig = {\n  pathToFiles: `${process.cwd()}/sounds`,\n};\n\nnew VoiceServer(serverConfig).listen(\n  async (req, res) => {\n    console.log(req);\n    await res.answer();\n    await res.play(`sound:${req.selfEndpoint}/sounds/hello-world.sln16`);\n    await res.hangup();\n  }\n);\n')),(0,o.kt)("p",null,"Or to make a call to the telephone network, you could use the SDK and write a simple script like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-none"},'const Fonoster = require("@fonoster/sdk");\nconst callManager = new Fonoster.CallManager();\n\ncallManager.call({\n from: "9842753574",\n to: "17853178070",\n webhook: "https://5a2d2ea5d84d.ngrok.io"\n})\n.then(console.log)\n.catch(console.error);\n')),(0,o.kt)("p",null,"Want to create a reminders application? No problem, in few easy steps, you can create and deploy a Cloud Function that will run based on a given Cron schedule."),(0,o.kt)("p",null,"First, initialize your Cloud Function with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-none"},"fonoster funcs:init\n")),(0,o.kt)("p",null,"Then, edit the handler with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-none"},'const Fonoster = require("@fonoster/sdk");\nconst callManager = new Fonoster.CallManager();\n\n// \ud83d\ude80 Let\'s get started\n// Use fonoster funcs:deploy to send to the cloud functions\nmodule.exports = async(request, response) => {\n  await callManager.call({\n    from: "9842753589",\n    to: "17853178070",\n    webhook: "https://5a2d2ea5d84d.ngrok.io"\n  })\n  return response.succeed("OK");\n};\n')),(0,o.kt)("p",null,"Finally, deploy to the Cloud Functions subsystem with a Cron string."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-none"},'fonoster funcs:deploy --schedule "*/5 * * * *"\n')),(0,o.kt)("p",null,"You get the idea."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Cloud Functions capability if offered by the integration with OpenFaaS (by Alex Ellis)")),(0,o.kt)("h3",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"Be sure to check ",(0,o.kt)("a",{parentName:"p",href:"https://learn.fonoster.dev/blog/The%20essentials%20of%20building%20Voice%20Applications%20with%20Fonoster"},"The essentials of building Voice Applications with Fonoster")," to overview the Programmable Voice features available on Project Fonoster. "),(0,o.kt)("p",null,"Star the project on Github and contact us via:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Twitter: ",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/fonoster"},"@fonoster")),(0,o.kt)("li",{parentName:"ul"},"Email: ",(0,o.kt)("a",{parentName:"li",href:"mailto:fonosterteam@fonoster.com"},"fonosterteam@fonoster.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord.com/invite/mpWSRUhG7e"},"Discord"))))}d.isMDXComponent=!0}}]);