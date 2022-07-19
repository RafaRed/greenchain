# **GreenChain**
## _Help the world and get funded for it_

[![N|GreenChain](https://i.imgur.com/9L88sNX.png)](https://greenc.vercel.app)

GreenChain is an application that enables the user to help the world and be funded by that,
using the transparency and decentralization that web 3.0 provides.

- https://greenc.vercel.app

## 📋 Contents

[Why?](#why)  
[How to use?](#how-to-use)  
[Video Demo](#video-demo)  
[Installation](#installation)  
[Technologies Used](#technologies-used)  
[Public Repository](#public-repository)  
[Security Improvements](#security-improvements)  
[Upgrading](#upgrading-)  
[FAQ](#faq)  
[Contact](#contact)  

## Why?

- There are none or almost no platforms that allow the user to receive financial incentives in cryptocurrencies when finding and publishing, participating, or funding actions aimed at the environment;
- Difficulty for users to effectively help the environment and get paid for it;
- Difficulties users have to sponsor projects related to environmental issues, whether small or large, public or private;
- Nowadays, there are none or almost no applications that are related to sustainability and web 3.0 simultaneously, and even fewer apps that manage to take real advantage of web 3.0 resources;

## How to use?

GreenChain uses the resources that web 3.0 offers to create a sustainable platform where all users can
benefit while contributing to the health of our planet.

1. Any user can make a report to flag an environmental issue;
2. Any user can propose activities that solve a reported problem and choose an amount to execute it;
3. The community decides if it wants to contribute financially to an activity or join it by offering its labor;
4. Funders will validate by images if the activity was carried out as proposed;
5. After validation, the members who performed the activity and the report creator will receive all the funds raised, equality, directly into their wallets.

- All data is stored using the **IPFS** protocol making sure that it is immutable and decentralized.
- Financial transactions will be carried out with full transparency using **Blockchain**.

Users can make a wide variety of reports, such as streets full of garbage, and polluted waters, create campaigns for smart waste disposal deforestation in certain areas, etc. The tasks are also independent of each other, that is, you can financially support one task to solve a report and not support another. In this way, the community itself will have the freedom to propose and support what they believe to be the best solution.

## Video Demo

Click to access our video demo:
| Video | Youtube |
| ------ | ------ |
| GreenChain-videodemo | https://www.youtube.com/watch?v=FIpGUpYkr0s |

## Installation

**1 - Download the files**
```sh
git clone https://github.com/RafaRed/greenchain.git
```

**2 - Install and run the project**
- 2.1. Setup using firebase function as a server.
- 2.2. Setup Client
```sh
cd web
npm install
edit web\src\model\repository.js passing  your firebase functions URL to the server variable
npm start
```


**3 - Create and add the** *ipfs.json* **to folder** *server/functions*
```sh
{
    "api-key":""
}
```

**4 - Create** *config.json* **and add your firebase credentials** **to folder** *server/functions*
```sh
{
  "type": "",
  "project_id": "",
  "private_key_id": "",
  "private_key": "",
  "client_email": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "",
  "auth_provider_x509_cert_url": "",
  "client_x509_cert_url": ""
}
```

**5 - Start your server**
```sh
firebase emulators:start

In the first run, you should call externally the /initialize endpoint to initialize the tree keys.
This can be done throug postman
```

## Technologies Used

- React, Javascript - Application base;
- Node.js, Express - Serverless and application endpoints;
- Web3.storage - Free hosting offered by protocol labs with easy access API;
- IPFS gateways - We use some gateways together with the IPFS Tree to guarantee the ease of accessing files even if one of them falls;
- IPFS - Store and load data;
- IPNS - We use it to recover the parent nodes of the tree quickly;
- Firebase Functions - Serverless service to achieve fast server configuration.


![N|GreenChain](https://i.imgur.com/NxfEZsV.png)

## Public Repository

Click to access our repository:
| GreenChain | Link |
| ------ | ------ |
| Public Repo | https://github.com/rafared/greenchain |

## Security Improvements

- API authentication;
- Validation of fields in all forms;

## Upgrading 🚀

- Implement responsive design;
- Website design and usability improvements;
- Improved reports and tasks feed availability;
- Work with concurrent changes allowing decentralized servers;
- Use blockchain to enable transactions between users and donors in a sustainable way;
- Implement validation of fields in all forms;
- Fix a possible problem of the task leader being absent on the day of the task;
- Fix the possible issue of one or more donors giving up paying after the task is completed or validated;
- Add function to improve filters based on user profile (AI);
- Add integration with Google Maps for localization function;
- Add the function of adding videos;
- Add new avatars;
- Add filters to the report and task feed:  
-> Created by me;  
-> That I participate;  
-> I funded;  
-> By region;  
-> By types of environmental cause;  

## FAQ 

01. How to validate that the task was performed honestly?

> Each member of a team must present images of their collaboration, preferably showing the before and after of what was done, through which a funder will be able to evaluate and validate the team's effort before releasing its funding.  
> 
> **Improvements in the Future**: It is possible that support for other media, such as uploading videos, makes task validation easier.


02. How to validate that the accumulated amount can already be redistributed to the team?
> We opted for payments to be executed as soon as 60% of funders approve the project, even though we know there are vulnerabilities in the current system, such as dishonest users being able to make small donations to multiple accounts to ensure they get 60% of the votes.  
> 
> **Improvements in the Future**: We imagine that in the future a smarter approach would be to use quadratic voting, where donors who invested more money have greater voting power, but without excluding smaller donors from collaborating in this decision.


03. How to ensure that users who have done their part are not harmed by other members who have not proven their activities?
> At the moment we are not individually validating whether all team members performed their work correctly, so we are not rewarding users according to their performance.  
> 
> **Improvements in the Future**: In the future, we hope to develop a reporting system so that the team can report users who for some reason did not collaborate with the activity or acted with malicious intent. It would also be interesting to give the possibility for funders and members to reward those users who made a greater effort.


04. What happens if malicious funders choose to remove their money even when team members have fulfilled what was proposed in the activity?
> At the moment it will not be allowed to remove the money used to fund activity. A funder will only receive their money back if the activity has expired or if the activity is not validated by the other funders (less than 60% validation).  
> 
> **Improvements in the Future**: In the future, we hope to develop a reporting system so that the team can report backers who for some reason did not cooperate with the payment or acted maliciously. It would also be interesting to give more visibility to more participatory funders.


## Contact

Persons of contact in case there are any questions 
| Contact | Rafael Souza |
| ------ | ------ |
| Discord | Rafael Souza#2474 |
| Contact Email | rafaelszcardoso@gmail.com |


| Contact | Luciano Ferreira |
| ------ | ------ |
| Discord | lucianofbn#3226 |
| Contact Email | lfbnwork@gmail.com |


| Contact | Leandro Bernardini |
| ------ | ------ |
| Discord | Leandro#0775 |
| Contact Email | lndrworks@gmail.com |
