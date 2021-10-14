# Crwn Clothing Ltd

### Published link: [Crwn Clothing Ltd](https://crwn-clothing-shop-company.herokuapp.com/)

## Purpose

Crwn Clothing Ltd e-Commerce website provides both men and wemen's clothing and accessories. Users can easily browser around between specific category and product overview and most importantly is user is able to add item into the shopping cart without any further click.

Once user added the item into shopping cart, shopping cart icon will show up immediately the quantity of items. By clicking the shopping cart icon, user will see a small window that shows all the item and quantity of products that have been added. Also, if user would like to see more detail or adjust items, by clicking go to checkout button. Moreover, user can pay with credit card (provide number).

Users can find more shop detail including shop google map and social media on Contact page, also user can leave message there.

Sign in page provides user to register(sign up) or sign in the website, users can choose register with email or sign in with google account.

## Features

1. Fashion and Hit color
1. Interactive Buttons
1. UI/UX friendly for both desktop and mobile
1. Sign in with Google account
1. Interative google map

## Tech stack

Firebase storeage and Auth
Sign in with Google account
Redux managment

### Client side

- ReactJs
- Sass/CSS
  - Flexbox
  - Grid
  - Variables
  - Mixin
- Animations
- Redxu
- Redxu Saga
- Stripe

### Server side

- NodeJs ExpressJs
- RestfulAPI
- PostgreSQL
- knex (for connecting DB and server)
- bcrypt (for hashing password)

### delopment && API

- Clarifai
- client side -- netilify
- server side -- Heroku

## Security

- Clarifai's API key is an stored at Heroku as environment variable in order to seperate from back end server code.
- Clarifai's API key is set after delopment.
- Hash user's password with bcrypt.
- Storing password and user name with different tables, in order to reduce risk of data.

## Roadmap - Front end -> Back end -> Database

The route from frontend (sign in / register) to backend (server) and connect with postgreSQL and return back to frontend.

![Roadmap](https://github.com/TanjaKuo/face-detection/blob/main/doc/full%20stack.png)

## Guide - How to use

![Roadmap](https://github.com/TanjaKuo/face-detection/blob/main/doc/face-use.png)

## Connect API - Front end -> Back end -> Database

The route from frontend (sign in / register) to backend (server) and connect with Clarifai Face Recognition API.
Once fetch face data will return back to front end again.

![Roadmap](https://github.com/TanjaKuo/face-detection/blob/main/doc/clarifai-api.png)

## Screenshots

### Register Page

![Register](https://github.com/TanjaKuo/face-detection/blob/main/doc/register.png)
![Register](https://github.com/TanjaKuo/face-detection/blob/main/doc/register-mobile.png)

### Sign In

![Sgnin](https://github.com/TanjaKuo/face-detection/blob/main/doc/sign-in.png)
![SIgnin](https://github.com/TanjaKuo/face-detection/blob/main/doc/sign-in%20mobile.png)

### Face Detection Page - entry image url will detect face on the image

![Face](https://github.com/TanjaKuo/face-detection/blob/main/doc/face-detection.png)
![Face](https://github.com/TanjaKuo/face-detection/blob/main/doc/face-detection-mobile.png)
