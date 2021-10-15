# Crwn Clothing Ltd

### Published link: [Crwn Clothing Ltd](https://cw-shop.herokuapp.com/)

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
- Stripe Payment

### Server side

- NodeJs ExpressJs (for Stripe payment)
- Firebase Authentication (Google user sign up)
- Firestore (Google & email user sign in and store products)

### delopment

- client && server side -- Heroku

## Security

- Stripe's API key is set after delopment.

## Sitemap

![Sitemap](https://github.com/TanjaKuo/clothing-site/blob/master/doc/site-map.png)

## Guide - How to use

![Guide](https://github.com/TanjaKuo/clothing-site/blob/master/doc/how-to-use.png)

## Roadmap- Front end -> Back end / Firebase -> Firestore

User can choose either sign up with email or Google account, if user sign up with Google account then the data will send to firebase Authentication and also Firestore.

If user signs up with email, the email, password and name will be send to firebase Authentication, ONLY user uses the same email and password to sign in, the data will be stored in Firestore.

Products are stored in Firestore which makes the frontend files smaller and no need worry. Besides, if in the future, there are more products need to display on the website, anyone who has accessed to firestoed can easily added or adjust items without write any code.

Building a ExpressJs server to connect front end and Stripe payment, in order to make the payment.

![Roadmap](https://github.com/TanjaKuo/clothing-site/blob/master/doc/roadmap.png)

## Sign in/Sign up - connect with Firebase Authentication/Firestore

There are two ways to Sign up to website, by email sign up and Google account.

### Sign Up:

- require: user name, email, password, confire password (At first time to make sure user enter macth password)
- roadmap: once user sign up and send data to firebase Authenication, firebase will automatically generate user UID and store user data in firebase Authenication for future comparison.

### Sign Up:

- require: user name, email, password, confire password (At first time to make sure user enter macth password)
- roadmap: once user sign up and send data to firebase Authenication, firebase will automatically generate user UID and store user data in firebase Authenication for future comparison.

![Guide](https://github.com/TanjaKuo/clothing-site/blob/master/doc/how-to-use.png)

## Screenshots

### Home Page

![Home](https://github.com/TanjaKuo/clothing-site/blob/master/doc/home.png)
![Home](https://github.com/TanjaKuo/clothing-site/blob/master/doc/home-mobile.png)

### Category Page

![Category](https://github.com/TanjaKuo/clothing-site/blob/master/doc/category.png)
![Category](https://github.com/TanjaKuo/clothing-site/blob/master/doc/category-mobile.png)

### Shop Page

![Shop](https://github.com/TanjaKuo/clothing-site/blob/master/doc/product.png)
![Shop](https://github.com/TanjaKuo/clothing-site/blob/master/doc/product-mobile.png)

### Contact Page

![Contact](https://github.com/TanjaKuo/clothing-site/blob/master/doc/contact.png)
![Contact](https://github.com/TanjaKuo/clothing-site/blob/master/doc/contact-mobile.png)

### Sign In

![Sgnin](https://github.com/TanjaKuo/clothing-site/blob/master/doc/signin.png)
![SIgnin](https://github.com/TanjaKuo/clothing-site/blob/master/doc/signin-mobile.png)

### Checkout Page

![Checkout](https://github.com/TanjaKuo/clothing-site/blob/master/doc/checkout.png)
![Checkout](https://github.com/TanjaKuo/clothing-site/blob/master/doc/checkout-mobile.png)

### Payment Page

![Payment](https://github.com/TanjaKuo/clothing-site/blob/master/doc/payment.png)
![Payment](https://github.com/TanjaKuo/clothing-site/blob/master/doc/payment-mobile.png)
