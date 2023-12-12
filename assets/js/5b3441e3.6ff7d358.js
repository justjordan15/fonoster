"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={slug:"Dialogflow entities",title:"Dialogflow entities. Capturing useful data.",authors:["yuricodes"],tags:["fonoster","voice","OSS","VUI","Dialogflow"]},i="Dialogflow entities",l={permalink:"/blog/Dialogflow entities",editUrl:"https://github.com/fonoster/website/edit/main/docs/blog/blog/2023_02_08-dialogflow_entities.md",source:"@site/blog/2023_02_08-dialogflow_entities.md",title:"Dialogflow entities. Capturing useful data.",description:"Dialogflow sits in the middle between the user and our application, helping us capture conversations from natural language into useful and readable data.",date:"2023-12-12T02:14:39.000Z",formattedDate:"December 12, 2023",tags:[{label:"fonoster",permalink:"/blog/tags/fonoster"},{label:"voice",permalink:"/blog/tags/voice"},{label:"OSS",permalink:"/blog/tags/oss"},{label:"VUI",permalink:"/blog/tags/vui"},{label:"Dialogflow",permalink:"/blog/tags/dialogflow"}],readingTime:2.085,hasTruncateMarker:!1,authors:[{name:"Yuri Santana",title:"Developer Relations Advocate at Fonoster",url:"https://github.com/yuricodes",imageURL:"https://github.com/yuricodes.png",key:"yuricodes"}],frontMatter:{slug:"Dialogflow entities",title:"Dialogflow entities. Capturing useful data.",authors:["yuricodes"],tags:["fonoster","voice","OSS","VUI","Dialogflow"]},nextItem:{title:"Differences in types of Conversational Interfaces",permalink:"/blog/Differences in types of Conversational Interfaces"}},s={authorsImageUrls:[void 0]},u=[{value:"Entity vs Intent",id:"entity-vs-intent",level:2},{value:"Join the conversation",id:"join-the-conversation",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dialogflow sits in the middle between the user and our application, helping us capture conversations from natural language into useful and readable data. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Entities")," take care of extracting information and details from what the user says. They are present the moment you create your first intent and start\ncreating training phrases, Dialogflow will automatically identify and label some words suggesting entities for you to match with an intent."),(0,a.kt)("p",null,"Having entities set in place will help you train your assistant and make it more efficient for the users. These can be created manually or by a JSON or CSV file."),(0,a.kt)("p",null,"There are multiple types of entities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"System entities:"))),(0,a.kt)("p",null,"These are default entities of Dialogflow and they match many types of common words like geographic locations or dates."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@sys.date\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Custom or developer entities:"))),(0,a.kt)("p",null,"These allow you to define your own words to trigger an intent, you can also provide synonyms. "),(0,a.kt)("p",null,"They come in handy when building your own assistant with specific words you want it to listen to and identify so you can provide\nan accurate response to your users. "),(0,a.kt)("p",null,"Just remember that when providing a custom name, it can start with a letter, number, dash or underscore. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@computer_service\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Custom or developer composite entities:"),"\nThese are built from multiple custom entities linked to be triggered together. "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"@os_computer[@os_device @computer_service]\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Session entities:")))),(0,a.kt)("p",null,"They are generated for a single user-specific session, from one conversation between the agent and the user."),(0,a.kt)("p",null,"These entities expire automatically after 20 minutes. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Regexp entities:"))),(0,a.kt)("p",null,"These utilize Regular Expressions to match more specialized entities from the user."),(0,a.kt)("p",null,"It is important to remember that the order in which you present your regular expressions to the agent matter because the search will stop once a valid match is found."),(0,a.kt)("h2",{id:"entity-vs-intent"},"Entity vs Intent"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Entities")," will make your development time quicker and, once identified by the agent, provide accurate responses to the interaction at hand. They are the way you have to catch important data from the user. ",(0,a.kt)("strong",{parentName:"p"},"Intent")," helps understand what the user request really means, it usually contains training phrases that help it identify what the end-user expression wants, actions to be performed after an intent is identified, parameters that will form the entity and dictate how data is extracted and responses that will be returned to the end-user."),(0,a.kt)("h3",{id:"join-the-conversation"},"Join the conversation"),(0,a.kt)("p",null,"Fonoster is developed in the open. Here are some of the channels you can use to reach us: "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/4QWgSz4hTC"},"Discord")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"GitHub discussions:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/fonoster/fonoster/discussions/categories/q-a"},"Q&A")," ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Twitter:")," ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/fonoster"},"@fonoster")))}m.isMDXComponent=!0}}]);