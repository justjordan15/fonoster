"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={slug:"Deploying Fonoster with Cloud-Init",title:"Deploying Fonoster with Cloud-Init",authors:["psanders"],tags:["fonoster","voice","javascript","voice"]},i="Deploying Fonoster with Cloud-Init",l={permalink:"/blog/Deploying Fonoster with Cloud-Init",editUrl:"https://github.com/fonoster/website/edit/main/docs/blog/blog/2022-10-04-Deploying_Fonoster_With_Cloud_init.md",source:"@site/blog/2022-10-04-Deploying_Fonoster_With_Cloud_init.md",title:"Deploying Fonoster with Cloud-Init",description:"At Fonoster Inc, we want to help companies and individuals that wish to adopt Fonoster as their Programmable Telecommunications solution. To help archive this goal, our team uses Cloud-Init for cloud instance initialization.",date:"2022-10-04T00:00:00.000Z",formattedDate:"October 4, 2022",tags:[{label:"fonoster",permalink:"/blog/tags/fonoster"},{label:"voice",permalink:"/blog/tags/voice"},{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:2.13,hasTruncateMarker:!1,authors:[{name:"Pedro Sanders",title:"CTO at Fonoster",url:"https://github.com/psanders",imageURL:"https://github.com/psanders.png",key:"psanders"}],frontMatter:{slug:"Deploying Fonoster with Cloud-Init",title:"Deploying Fonoster with Cloud-Init",authors:["psanders"],tags:["fonoster","voice","javascript","voice"]},prevItem:{title:"How we created an open-source alternative to Twilio and why it matters",permalink:"/blog/How we created an open-source alternative to Twilio and why it matters"},nextItem:{title:"The essentials of building Voice Applications with Fonoster",permalink:"/blog/The essentials of building Voice Applications with Fonoster"}},s={authorsImageUrls:[void 0]},p=[{value:"Requirements",id:"requirements",level:2},{value:"Deploying to Multipass",id:"deploying-to-multipass",level:2},{value:"What&#39;s next?",id:"whats-next",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At ",(0,a.kt)("a",{parentName:"p",href:"https://fonoster.com/"},"Fonoster Inc"),", we want to help companies and individuals that wish to adopt Fonoster as their Programmable Telecommunications solution. To help archive this goal, our team uses Cloud-Init for cloud instance initialization."),(0,a.kt)("p",null,"You can deploy Fonoster to all major public cloud providers, private cloud infrastructure, and bare-metal installations with Cloud-Init."),(0,a.kt)("p",null,"In this tutorial, we will also use Multipass."),(0,a.kt)("p",null,"Multipass is a Canonical project that offers a lightweight VM manager for Linux, Windows, and macOS. With Multipass, you can deploy Fonoster on Ubuntu in a local environment in a single command. This deployment method is by far the fastest way to get started with Fonoster."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Before you start this tutorial, you will need the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://multipass.run/"},"Multipass")),(0,a.kt)("li",{parentName:"ul"},"NodeJS 14+ (Use nvm if possible)"),(0,a.kt)("li",{parentName:"ul"},"Fonoster command-line tool (install with ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install -g @fonoster/ctl"),")")),(0,a.kt)("h2",{id:"deploying-to-multipass"},"Deploying to Multipass"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This method will not automatically enable TLS for you")),(0,a.kt)("p",null,"Deploy Fonoster to Multipass with the following steps. First, download the ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/fonoster/fonoster/main/operator/cloud-config.txt"},"cloud-config.txt")," file into a local directory with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-none"},"curl https://raw.githubusercontent.com/fonoster/fonoster/main/operator/cloud-config.txt -o cloud-config.txt\n")),(0,a.kt)("p",null,"Since we are running locally, we have to modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud-config")," to discover the private ipv4 instead of the public ipv4."),(0,a.kt)("p",null,"First, update ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud-config")," with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-none"},'sed -i.bak -e "s#publicv4#privatev4#g" "cloud-config.txt"\n')),(0,a.kt)("p",null,"Then, from the same directory, fire up Multipass."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-none"},"multipass launch --name fonoster --disk 8G --cpus 2 --mem 4G --cloud-init cloud-config.txt\n")),(0,a.kt)("p",null,"You might see a ",(0,a.kt)("inlineCode",{parentName:"p"},"timed out waiting for initialization to complete"),", especially in a slow Internet connection. Don't worry. The process will continue in the background."),(0,a.kt)("p",null,"You can access your VM and continue following the installation process with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-none"},"multipass shell fonoster\ntail -f /var/log/cloud-init-output.log\n")),(0,a.kt)("p",null,'Once you see "Cloud init is done!" the process is complete. If everything goes well, you will be able to log in to your Fonoster deployment. To authenticate for the first time to your deployment, first get your admin credentials with:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-none"},"cat /opt/fonoster/config/admin_credentials\n")),(0,a.kt)("p",null,"Your output will look like the one below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-none"},'{\n   "accessKeyId": "admin",\n   "accessKeySecret": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."\n}\n')),(0,a.kt)("p",null,"Next, from the host machine, obtain your VM's IP with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-none"},"multipass info fonoster\n")),(0,a.kt)("p",null,"Look for the entry starting with IPv4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-none"},"Name:           fonoster\nState:          Running\nIPv4:           192.168.64.39\n                172.17.0.1\n                172.24.0.1\n...\n")),(0,a.kt)("p",null,"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"accessKeyId"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"accessKeySecret"),", and your VM's IP address, you can now login using the command-line tool or access your server with the SDK."),(0,a.kt)("h3",{id:"whats-next"},"What's next?"),(0,a.kt)("p",null,"For more deployment options, be sure to check the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fonoster/fonoster/blob/main/docs/operator/deploy-your-server.md"},"operator's section of Fonoster's documentation"),". "),(0,a.kt)("p",null,"Star the project on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fonoster"},"Github")," and contact us via:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Twitter: ",(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/intent/follow?screen_name=fonoster"},"@fonoster")),(0,a.kt)("li",{parentName:"ul"},"Email: ",(0,a.kt)("a",{parentName:"li",href:"mailto:fonosterteam@fonoster.com"},"fonosterteam@fonoster.com")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://discord.gg/4QWgSz4hTC"},"Discord"))))}m.isMDXComponent=!0}}]);