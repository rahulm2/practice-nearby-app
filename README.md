# Nearby App

## Quick start

Go through the steps below.

1\. Clone this repository

```sh
git clone git@github.com:rahulm2/practice-nearby-app.git
```


2\. Install all dependencies

```sh
npm i
```

3\. Setup Infra

```sh
npm run infra:up
```

4\. Run Prisma migrations

```sh
npx prisma migrate dev --name init
npx prisma db seed

```
5\. Application Graphql endpoint

http://localhost:3000/graphql

6\. Hasure endpoint

http://localhost:8080, password- myadminsecretkey

7. Access token login  request

POST http://localhost:3000/auth/login
Payload- {
"username": "admin",
"password": "admin"
}

## Testing

```sh
npm run test
``` 

### Tear down

Use `npm run infra:down`
