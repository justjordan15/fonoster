"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8885],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=i(r),d=a,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1743:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={},l="Configuring Vault",c={unversionedId:"operator/configuring-vault",id:"operator/configuring-vault",title:"Configuring Vault",description:"Fonoster offers support for Secret management based on Hashicorp Vault.",source:"@site/docs/operator/configuring-vault.md",sourceDirName:"operator",slug:"/operator/configuring-vault",permalink:"/docs/operator/configuring-vault",draft:!1,editUrl:"https://github.com/fonoster/website/edit/main/docs/docs/operator/configuring-vault.md",tags:[],version:"current",frontMatter:{}},u={},i=[],s={toc:i},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-vault"},"Configuring Vault"),(0,a.kt)("p",null,"Fonoster offers support for Secret management based on ",(0,a.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/"},"Hashicorp Vault"),"."),(0,a.kt)("p",null,"As with anything related to managing data, we recommend using a ",(0,a.kt)("a",{parentName:"p",href:"https://www.hashicorp.com/blog/vault-on-the-hashicorp-cloud-platform"},"managed service")," to back your secrets. However, to help you get started, we include a basic Vault deployment as part of the operator's scripts."),(0,a.kt)("p",null,"Create an empty folder download Vault's configuration files with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir vault\ncd vault\ncurl -o vault.json https://raw.githubusercontent.com/fonoster/fonoster/main/etc/vault.json\ncurl -o vault_policy.hcl https://raw.githubusercontent.com/fonoster/fonoster/main/etc/vault_policy.hcl\n")),(0,a.kt)("p",null,"To get your Vault container ID, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"CONTAINER_ID=$(docker ps --no-trunc -aqf name=vault)\n")),(0,a.kt)("p",null,"Set the Vault address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export VAULT_ADDR=http://localhost:8200\n")),(0,a.kt)("p",null,"Now, initialize Vault:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it -e VAULT_ADDR=$VAULT_ADDR $CONTAINER_ID vault operator init -key-shares=1 -key-threshold=1\n")),(0,a.kt)("p",null,"This will produce an output with an unseal key and the initial root token."),(0,a.kt)("p",null,"Unseal Vault using the unseal key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it -e VAULT_ADDR=$VAULT_ADDR $CONTAINER_ID vault operator unseal <UnsealKey>\n")),(0,a.kt)("p",null,"Set the root token environment variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export VAULT_TOKEN=<InitialRootToken>\n")),(0,a.kt)("p",null,"Finally, configure Vault policies and enable secrets and authentication methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it -e VAULT_ADDR=$VAULT_ADDR -e VAULT_TOKEN=$VAULT_TOKEN $CONTAINER_ID vault policy write fonoster-secrets-policy /vault/config/vault_policy.hcl\ndocker exec -it -e VAULT_ADDR=$VAULT_ADDR -e VAULT_TOKEN=$VAULT_TOKEN $CONTAINER_ID vault secrets enable -path=secret kv\ndocker exec -it -e VAULT_ADDR=$VAULT_ADDR -e VAULT_TOKEN=$VAULT_TOKEN $CONTAINER_ID vault auth enable approle\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Make sure to save the root token and unseal key in a safe place. You will need them to configure the operator and to unseal Vault in case of a restart.")))}f.isMDXComponent=!0}}]);