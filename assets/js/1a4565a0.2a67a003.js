"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4410],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(o),h=n,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return o?r.createElement(m,i(i({ref:t},c),{},{components:o})):r.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},7853:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const a={},i="Deploy with Docker",l={unversionedId:"operator/deploy-with-docker",id:"operator/deploy-with-docker",title:"Deploy with Docker",description:"Docker compose is the easiest way to deploy a self-hosted instance of Fonoster. This guide will walk you through the process of deploying the Fonoster services using Docker and Docker Compose.",source:"@site/docs/operator/deploy-with-docker.md",sourceDirName:"operator",slug:"/operator/deploy-with-docker",permalink:"/docs/operator/deploy-with-docker",draft:!1,editUrl:"https://github.com/fonoster/website/edit/main/docs/docs/operator/deploy-with-docker.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deploy-with-docker"},"Deploy with Docker"),(0,n.kt)("p",null,"Docker compose is the easiest way to deploy a self-hosted instance of Fonoster. This guide will walk you through the process of deploying the Fonoster services using Docker and Docker Compose."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"The only prerequisite for Fonoster is to have ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," installed on the host machine."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"First, create a new directory in your preferred location and change to that directory. For this guide, we will use the directory ",(0,n.kt)("inlineCode",{parentName:"p"},"fonoster")," in the home directory."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir fonoster\ncd fonoster\n")),(0,n.kt)("p",null,"Next, copy the ",(0,n.kt)("inlineCode",{parentName:"p"},".env.example")," from the repository to the current directory and rename it to ",(0,n.kt)("inlineCode",{parentName:"p"},".env"),". This file contains all the environment variables that the services need to run. You can use the following command to copy the file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o .env https://raw.githubusercontent.com/fonoster/fonos/main/.env.example\n")),(0,n.kt)("p",null,"Then, open the ",(0,n.kt)("inlineCode",{parentName:"p"},".env")," file with your favorite editor and update the following variables:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DOCKER_HOST_ADDRESS"),": The public IP address of your Docker host. If running locally, you can use your local IP address. If you are running the application on a server, you must use the public IP address of your server"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NEXTAUTH_URL")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"WEBUI_APP_URL")," must be the URL where the application will be accessible. For example, if you are running the application locally, you can use ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:8080"),". If you are running the application on a server, you can use, for example, ",(0,n.kt)("inlineCode",{parentName:"li"},"https://fonoster.example.com")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"WEBUI_TEST_PHONE_SERVER")," - The public IP address of your Docker host. If running locally, you can use your local IP address. If you are running the application on a server, you must use the public IP address of your server.")),(0,n.kt)("p",null,"In addition to the previous variables, you should also change all the secrets with your own values and make sure to sefe-guard the ",(0,n.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,n.kt)("p",null,"Next, run the following command to start the application:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o ./compose.yaml https://raw.githubusercontent.com/fonoster/fonoster/main/compose.yaml\ndocker compose up -d\n")),(0,n.kt)("p",null,"Finally, you can access the application by visiting the URL you set in the ",(0,n.kt)("inlineCode",{parentName:"p"},"WEBUI_APP_URL")," variable. For example, if you set the variable to ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),", you can access the application by visiting ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," in your browser."),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/operator/configuring-vault"},"Configuring Vault for secrets"))))}d.isMDXComponent=!0}}]);