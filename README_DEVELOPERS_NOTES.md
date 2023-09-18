# Sertan Soydabas

## Intro

I have created a working monorepo using npm workspaces. This project consists of an api, a web app, a mongodb package, and a mailing service. I have followed the best practices in all the packages and if you investigate it a little, you will see the types and folder structure are finely tailored. I have spent 5 days to build this system not only to demonstrate my skills but also improve myself as far as being fast and accurate is concerned.

I would like to talk about this application a little further below.

## Web

Functionalities:

1. Used `TailwindCSS` to style the components. (Note that this is a Desktop only application).
2. Used `@tanstack/react-query` to handle api requests with advanced caching features.
3. Used `React Router` to enable multi-page functionality.
4. Used `craco` to build, bundle, and start the application

> You can signup, login, logout, fetch news when searched a keyword, fetch news when going to the very end of the news feed, filter out the results depending on source, category, author, and date.

## Api

Functionalities:

1. Used `Json Web Tokens` and `Passport JS` to handle authentication.
2. Used `express validator` to validate the incoming requests.
3. Used `bycrpyt` and `uuid` to handle passport generation, encryption, and salting.
4. Created three different routes to fetch news from `New York Times`, from `NewsApi`, and both.

> I strongly recommend checking the routing system that I have developed in router and services/validation section

## Mongo DB

There is only one entity in this database, User. It is responsible for mainly authentication.

## Mailing

I have chosen to use sendGrid to be able to quickly develop the whole system by not spending too much time on mailing.

## Last Notes

I would very much like to use my skills and abilities to grow with DT Cloud by contributing as much as I can.

### I appreciate any kind of feedback sent to my person.

- mobile: +90 542 899 50 24
- email: ssoydabas41@gmail.com
- github.com/ssoydabas
- linkedIn: linkedin.com/in/ssoydabas
