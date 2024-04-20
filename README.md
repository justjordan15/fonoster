
# Fonoster: The open-source alternative to Twilio

[Fonoster Inc](https://fonoster.com) is researching an innovative Programmable Telecommunications Stack that will allow businesses to connect telephony services with the Internet entirely through a cloud-based utility.

<a href="https://discord.gg/mpWSRUhG7e"><img alt="Fonoster community banner" src="https://raw.githubusercontent.com/fonoster/.github/main/profile/community.png"></img></a>

![build](https://github.com/fonoster/fonoster/workflows/unit%20tests/badge.svg) [![release](https://github.com/fonoster/fonoster/actions/workflows/release.yaml/badge.svg)](https://github.com/fonoster/fonoster/actions/workflows/release.yaml) [![Discord](https://img.shields.io/discord/1016419835455996076?color=5865F2&label=Discord&logo=discord&logoColor=white)](https://discord.gg/4QWgSz4hTC) <a href="https://github.com/fonoster/fonoster/blob/main/CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/Code%20of%20Conduct-v1.0-ff69b4.svg?color=%2347b96d" alt="Code Of Conduct"></a> ![GitHub](https://img.shields.io/github/license/fonoster/fonoster?color=%2347b96d) ![Twitter Follow](https://img.shields.io/twitter/follow/fonoster?style=social)

> Attention ⚠️:
> 
> **Exploring Fonoster**: We encourage new users to initially explore Fonoster's features through our SaaS (Software as a Service) option. This platform is free to start and offers a comprehensive experience of what Fonoster can do.
> 
> **Installation Advisory**: Please note that the current installation process for Fonoster is complex. We are actively working to simplify this process. We recommend waiting for our upcoming 0.4 or 0.5 release before attempting a direct installation. These future releases are designed to offer a more user-friendly installation experience.
>
>Thank you for your interest in Fonoster. We are committed to enhancing your experience with every release.

## Features 

The most notable features of Fonoster 0.6 are:

- [x] Multitenancy
- [x] Easy deployment of PBX functionalities
- [x] Programmable Voice Applications
- [x] NodeJS SDK
- [x] Support for Amazon Simple Storage Service (S3)
- [x] Secure API endpoints with Let's Encrypt
- [x] Authentication with OAuth2
- [X] Authentication with JWT 
- [x] Role-Based Access Control (RBAC)
- [x] Plugins-based Command-line Tool
- [x] Support for Google Speech APIs
- [x] Secrets managed by Hashicorp Vault

## Code Examples

A Voice Application is a server that takes control of the flow in a call. A Voice Application can use any combination of the following verbs:

- `Answer` - Accepts an incoming call
- `Hangup` - Closes the call
- `Play` - Takes a URL or file and streams the sound back to the calling party
- `Say` - Takes a text, synthesizes the text into audio, and streams back the result
- `Gather` - Waits for DTMF or speech events and returns back the result
- `SGather` - Returns a stream for future DTMF and speech results
- `Dial` - Passes the call to an Agent or a Number at the PSTN
- `Record` - It records the voice of the calling party and saves the audio on the Storage sub-system
- `Mute` - It tells the channel to stop sending media, effectively muting the channel
- `Unmute` - It tells the channel to allow media flow

Voice Application Example:

```typescript
const { VoiceServer } = require("@fonoster/voice");

const serverConfig = {
  pathToFiles: `${process.cwd()}/sounds`,
};

new VoiceServer(serverConfig).listen(
  async (req, res) => {
    console.log(req);
    await res.answer();
    await res.play(`sound:${req.selfEndpoint}/sounds/hello-world.sln16`);
    await res.hangup();
  }
);

// your app will live at http://127.0.0.1:3000 
// and you can easily publish it to the Internet with:
// ngrok http 3000
```

Everything in Fonoster is an API first, and initiating a call is no exception. You can use the SDK to start a call with a few lines of code.

Example of originating a call with the SDK:

```typescript
const Fonoster = require("@fonoster/sdk");
const callManager = new Fonoster.CallManager();

callManager.call({
 from: "9842753574",
 to: "17853178070",
 webhook: "https://5a2d2ea5d84d.ngrok.io/voiceapp"
})
 .then(console.log)
 .catch(console.error);
```

## Getting Started

To get started with Fonoster, use the following resources:

- [Deploying Fonoster with Docker](./docs/docs/operator/deploy-with-docker.md)
- [Getting started with Fonoster](https://fonoster.com/docs/overview/)
- [Connecting Fonoster with Dialogflow](https://fonoster.com/docs/tutorials/connecting_with_dialogflow)
- [Using Google Speech APIs](https://fonoster.com/docs/tutorials/using_google_speech)
- [How we created an open-source alternative to Twilio and why it matters](https://dev.to/fonoster/how-we-created-an-open-source-alternative-to-twilio-and-why-it-matters-434g)

## Give a Star! ⭐

Please give it a star if you like this project or plan to use it. Thanks 🙏

## Bugs and Feedback

For bugs, questions, and discussions, please use the [Github Issues](https://github.com/fonoster/fonoster/issues)

## Contributing

For contributing, please see the following links:

 - [Contribution Documents](https://github.com/fonoster/fonoster/blob/main/CONTRIBUTING.md)
 - [Contributors](https://github.com/fonoster/fonoster/contributors)

<!--contributors-->

<table>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/psanders>
            <img src=https://avatars.githubusercontent.com/u/539774?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Pedro Sanders/>
            <br />
            <sub style="font-size:14px"><b>Pedro Sanders</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/efraa>
            <img src=https://avatars.githubusercontent.com/u/40646537?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Efrain Peralta/>
            <br />
            <sub style="font-size:14px"><b>Efrain Peralta</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/wardner>
            <img src=https://avatars.githubusercontent.com/u/51765669?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Wardner Lara/>
            <br />
            <sub style="font-size:14px"><b>Wardner Lara</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/rihernandez>
            <img src=https://avatars.githubusercontent.com/u/27718122?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Richard HC/>
            <br />
            <sub style="font-size:14px"><b>Richard HC</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/xquanluu>
            <img src=https://avatars.githubusercontent.com/u/110280845?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Hoan Luu Huu/>
            <br />
            <sub style="font-size:14px"><b>Hoan Luu Huu</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/speedymonster>
            <img src=https://avatars.githubusercontent.com/u/31810381?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Speedy Monster/>
            <br />
            <sub style="font-size:14px"><b>Speedy Monster</b></sub>
        </a>
    </td>
</tr>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/BrayanMnz>
            <img src=https://avatars.githubusercontent.com/u/61812255?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Brayan Munoz Vargas/>
            <br />
            <sub style="font-size:14px"><b>Brayan Munoz Vargas</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/dedekrnwan>
            <img src=https://avatars.githubusercontent.com/u/25242055?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Dede kurniawan/>
            <br />
            <sub style="font-size:14px"><b>Dede kurniawan</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/gad2103>
            <img src=https://avatars.githubusercontent.com/u/1045265?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=gabriel duncan/>
            <br />
            <sub style="font-size:14px"><b>gabriel duncan</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/iamppborah>
            <img src=https://avatars.githubusercontent.com/u/96339995?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Prasurjya Pran Borah/>
            <br />
            <sub style="font-size:14px"><b>Prasurjya Pran Borah</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/hectorvent>
            <img src=https://avatars.githubusercontent.com/u/2405682?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Hector Ventura/>
            <br />
            <sub style="font-size:14px"><b>Hector Ventura</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/0xflotus>
            <img src=https://avatars.githubusercontent.com/u/26602940?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=0xflotus/>
            <br />
            <sub style="font-size:14px"><b>0xflotus</b></sub>
        </a>
    </td>
</tr>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/itzmanish>
            <img src=https://avatars.githubusercontent.com/u/12438068?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Manish/>
            <br />
            <sub style="font-size:14px"><b>Manish</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/osehgol>
            <img src=https://avatars.githubusercontent.com/u/4996423?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Osama Sehgol/>
            <br />
            <sub style="font-size:14px"><b>Osama Sehgol</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/psuet>
            <img src=https://avatars.githubusercontent.com/u/7604288?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Paul Sütterlin/>
            <br />
            <sub style="font-size:14px"><b>Paul Sütterlin</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/RiadVargas>
            <img src=https://avatars.githubusercontent.com/u/4274014?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Riad Vargas/>
            <br />
            <sub style="font-size:14px"><b>Riad Vargas</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/vcidst>
            <img src=https://avatars.githubusercontent.com/u/683016?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Shailendra Paliwal/>
            <br />
            <sub style="font-size:14px"><b>Shailendra Paliwal</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/gitter-badger>
            <img src=https://avatars.githubusercontent.com/u/8518239?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=The Gitter Badger/>
            <br />
            <sub style="font-size:14px"><b>The Gitter Badger</b></sub>
        </a>
    </td>
</tr>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/YuriCodes>
            <img src=https://avatars.githubusercontent.com/u/80093500?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Yuri/>
            <br />
            <sub style="font-size:14px"><b>Yuri</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/cdrsociate>
            <img src=https://avatars.githubusercontent.com/u/89363212?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=cdrsociate/>
            <br />
            <sub style="font-size:14px"><b>cdrsociate</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/ghana7989>
            <img src=https://avatars.githubusercontent.com/u/65382745?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=pavan/>
            <br />
            <sub style="font-size:14px"><b>pavan</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/nrjchnd>
            <img src=https://avatars.githubusercontent.com/u/17134818?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=nrjchnd/>
            <br />
            <sub style="font-size:14px"><b>nrjchnd</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/salami-dev>
            <img src=https://avatars.githubusercontent.com/u/57477131?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Salami Bashir/>
            <br />
            <sub style="font-size:14px"><b>Salami Bashir</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/scshiv29-dev>
            <img src=https://avatars.githubusercontent.com/u/68141773?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Shivam Deepak Chaudhary/>
            <br />
            <sub style="font-size:14px"><b>Shivam Deepak Chaudhary</b></sub>
        </a>
    </td>
</tr>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/showf68>
            <img src=https://avatars.githubusercontent.com/u/45857918?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=showf68/>
            <br />
            <sub style="font-size:14px"><b>showf68</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/telenautical>
            <img src=https://avatars.githubusercontent.com/u/106842020?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=telenautical/>
            <br />
            <sub style="font-size:14px"><b>telenautical</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/theewiz>
            <img src=https://avatars.githubusercontent.com/u/81051645?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Wisdom Elendu/>
            <br />
            <sub style="font-size:14px"><b>Wisdom Elendu</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/judgegodwins>
            <img src=https://avatars.githubusercontent.com/u/38760034?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Judge Godwins/>
            <br />
            <sub style="font-size:14px"><b>Judge Godwins</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/jonathan-chin>
            <img src=https://avatars.githubusercontent.com/u/7519412?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Jon Chin/>
            <br />
            <sub style="font-size:14px"><b>Jon Chin</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/harish-chander>
            <img src=https://avatars.githubusercontent.com/u/13236956?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Harish Chander/>
            <br />
            <sub style="font-size:14px"><b>Harish Chander</b></sub>
        </a>
    </td>
</tr>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/GaryBarnes17>
            <img src=https://avatars.githubusercontent.com/u/97693048?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Gary Barnes/>
            <br />
            <sub style="font-size:14px"><b>Gary Barnes</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/FidalMathew>
            <img src=https://avatars.githubusercontent.com/u/84982038?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Fidal Mathew/>
            <br />
            <sub style="font-size:14px"><b>Fidal Mathew</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/jellydn>
            <img src=https://avatars.githubusercontent.com/u/870029?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Dung Duc Huynh (Kaka)/>
            <br />
            <sub style="font-size:14px"><b>Dung Duc Huynh (Kaka)</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/cdosoftei>
            <img src=https://avatars.githubusercontent.com/u/7636091?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Ciprian/>
            <br />
            <sub style="font-size:14px"><b>Ciprian</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/infinitydon>
            <img src=https://avatars.githubusercontent.com/u/6318992?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Christopher Adigun/>
            <br />
            <sub style="font-size:14px"><b>Christopher Adigun</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/brunowego>
            <img src=https://avatars.githubusercontent.com/u/441774?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Bruno Wego/>
            <br />
            <sub style="font-size:14px"><b>Bruno Wego</b></sub>
        </a>
    </td>
</tr>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/brunoarueira>
            <img src=https://avatars.githubusercontent.com/u/119518?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Bruno Arueira/>
            <br />
            <sub style="font-size:14px"><b>Bruno Arueira</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/antoniusostermann>
            <img src=https://avatars.githubusercontent.com/u/2332002?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Antonius Ostermann/>
            <br />
            <sub style="font-size:14px"><b>Antonius Ostermann</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/alifiratari>
            <img src=https://avatars.githubusercontent.com/u/10004438?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Ali Firat ARI/>
            <br />
            <sub style="font-size:14px"><b>Ali Firat ARI</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/alexsands>
            <img src=https://avatars.githubusercontent.com/u/4269772?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Alex/>
            <br />
            <sub style="font-size:14px"><b>Alex</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/itsalb3rt>
            <img src=https://avatars.githubusercontent.com/u/35310226?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Albert E. Hidalgo Taveras/>
            <br />
            <sub style="font-size:14px"><b>Albert E. Hidalgo Taveras</b></sub>
        </a>
    </td>
</tr>
</table>

## Sponsors

We're glad to be supported by respected companies and individuals from several industries.

<a href="https://github.com/sponsors/fonoster"><img src="https://www.camanio.com/en/wp-content/uploads/sites/11/2018/09/camanio-carerund-cclogga-transparent.png" height="50"/></a>

Find all our supporters [here](https://github.com/sponsors/fonoster)

> [Become a Github Sponsor](https://github.com/sponsors/fonoster)

## Authors

 - [Pedro Sanders](https://github.com/psanders)

## License

Copyright (C) 2024 by [Fonoster Inc](https://fonoster.com). MIT License (see [LICENSE](https://github.com/fonoster/fonoster/blob/main/LICENSE) for details).