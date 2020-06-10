<h1 align="center">
Email-JWT-Auth
</h1>

<br />

This repository contains the frontend of a simple template (backend is [here](https://github.com/FLVieira/email-jwt-auth-backend))
made with React and Node for verifying users via email and authenticating them with JWT. Whenever a user signs
up, an email is sent automatically to the user's inbox, the email contains a link in order for the user to click and be 
verified (for sending the email I use mailtrap.io, so this will only works on a development environment, for production 
environment use AMAZON SES or related). If the user's email has not been verified, the user in a attempt to log in will get a warning and will 
not be able the enter his account. Another funcionality that I implemented is the famous "recover your password", here the 
user will provide his information and an email will be sent to his inbox with instructions to change his current password.

## Observations

I have done this app with the intention of creating a simple template that takes care of the initial authentication resolutions,
although it still's need further funcionalities and coding from whoever decides to use in order to become a full authentication
"tool".

## 📥  Installation 

Prerequesites:

- Yarn/Npm
- [Back-end](https://github.com/FLVieira/email-jwt-auth-backend-api) of the application running.

```
# Go to the terminal and execute the following commands:

1. git clone https://github.com/FLVieira/email-jwt-auth-front.git
2. cd email-jwt-auth-front
3. yarn 
4. yarn start
´´´






