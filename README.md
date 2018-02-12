# react-landing-pages
This repo contains a collection of landing pages written in React.js. At the moment, I have only one landing page. With time, I'm hoping that I'll have converted (or reactified) a few more landing pages. The goal is that you can clone this project, use one of the landing pages that you like, modify it, and get up to speed building your app in no time.

# Introduction
This project is more than just a landing page. It's a full bootstrapped application. 

The following technologies are being used:

  a) React.js (also using React router)
  b) scss pre-processor
  c) Node.js (Using Express)
  d) React Router
  e) Webpack

# Installation
1. Once you have cloned the repo, run npm install. This will install the node modules needed to run the applicaiton.

# How to run the app locally
npm run dev

# How to deploy on heroku

I have a postInstall script in package.json that will build the app with webpack.
Webpack and other npm modules to build the app are in devDependencies. In order to build on Heroku, you have to do the following:

heroku config:set NPM_CONFIG_PRODUCTION=false

which will allow heroku to install modules in devDependencies.

# Latest changes

1. Updated packages to latest versions
2. Updated webpack config to v3
