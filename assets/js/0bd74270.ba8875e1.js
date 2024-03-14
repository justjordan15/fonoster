"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o="Create a programmable voice application",l={unversionedId:"getting_started/create_a_voice_application",id:"getting_started/create_a_voice_application",title:"Create a programmable voice application",description:"What is a Programmable Voice Application?",source:"@site/docs/getting_started/create_a_voice_application.md",sourceDirName:"getting_started",slug:"/getting_started/create_a_voice_application",permalink:"/docs/getting_started/create_a_voice_application",draft:!1,editUrl:"https://github.com/fonoster/website/edit/main/docs/docs/getting_started/create_a_voice_application.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Create a project",permalink:"/docs/getting_started/create_a_project"},next:{title:"Configure a number",permalink:"/docs/getting_started/configure_a_number"}},p={},c=[{value:"Create a Voice Application",id:"create-a-voice-application",level:2},{value:"Using Ngrok to publish your Voice Application",id:"using-ngrok-to-publish-your-voice-application",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-programmable-voice-application"},"Create a programmable voice application"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What is a Programmable Voice Application?")," ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"A Programmable Voice Application is ",(0,r.kt)("strong",{parentName:"p"},"a server that takes control of the flow in a call, to make, receive, control and more, via software"),". "),(0,r.kt)("p",null,"A Voice Application can make use of any of the following commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Answer")," - Accepts an incoming call"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Hangup")," - Closes the call"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Play")," - Takes an URL or file and streams the sound back to the calling party"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Say")," - Takes a text, synthesizes it into audio and streams back the result"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Gather")," - Waits for Dual-Tone Multi-Frequency (DTMF) or speech events and returns back the result"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SGather")," - Returns a stream for future Dual-Tone Multi-Frequency (DTMF) and speech results"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Dial")," - Passes the call to an Agent or a Number at the Public Switched Telephone Network (PSTN)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Record")," - It records the voice of the calling party and saves the audio on the Storage sub-system"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Mute")," - It tells the channel to stop sending media, effectively muting the channel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Unmute")," - It tells the channel to allow media flow")),(0,r.kt)("h2",{id:"create-a-voice-application"},"Create a Voice Application"),(0,r.kt)("p",null,"Creating a Voice Application using Fonoster is frictionless. Follow these steps to create a Voice Application:"),(0,r.kt)("p",null,"First, open a new terminal."),(0,r.kt)("p",null,"Then, create a new directory for the application with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir voiceapp\ncd voiceapp\n")),(0,r.kt)("p",null,"Then, initiate the NodeJS application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -f\n")),(0,r.kt)("p",null,"And, create an ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," file with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { VoiceServer } = require("@fonoster/voice");\n\nconst serverConfig = {\n  pathToFiles: `${process.cwd()}/sounds`,\n};\n\nnew VoiceServer(serverConfig).listen(\n  async (req, res) => {\n    console.log(req);\n    await res.answer();\n    await res.play(`sound:${req.selfEndpoint}/sounds/hello-world.sln16`);\n    await res.hangup();\n  }\n);\n')),(0,r.kt)("p",null,"Install the voice module with the follwing command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @fonoster/voice\n")),(0,r.kt)("p",null,"Finally, run the application with following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node index.js\n")),(0,r.kt)("p",null,"Your output will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ node index.js \ninfo: initializing voice server\ninfo: starting voice server @ 0.0.0.0, port=3000, path=/voiceapp\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Your app will live at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:3000"),". Be sure to leave the server running.")),(0,r.kt)("h2",{id:"using-ngrok-to-publish-your-voice-application"},"Using Ngrok to publish your Voice Application"),(0,r.kt)("p",null,"Now that we have the Voice Application up and running, you need to make it available on the Internet. The fastest way to enable public access is by using Ngrok. With Ngrok, you can publish a web server with a single command."),(0,r.kt)("p",null,"Without closing the Voice Application, open a new terminal and run Ngrok with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000\n")),(0,r.kt)("p",null,"Now you can use Ngrok's URL as the Webhook on any of your Fonoster Numbers."))}m.isMDXComponent=!0}}]);