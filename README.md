# tmp-assessment
Temporary Assessment Repository

## Build Setup
``` bash
# install dependencies
$ npm run i

# serve with hot reload
$ npm run dev
```

## GraphQL Endpoints

Run server in development mode to access GraphQL Playground to execute the primary service endpoint `emailWishes`.

The queries and mutations are self documented, but are listed here as a summary.

Queries
- `statsWishes` - wished employee IDs

Mutations
- `emailWishes` - wishes employees
- `clearWishes` - erases employees wished

## .env

The environment file should look as follows, whereas the `nodemailer` properties must be set.
```
# server
PORT=8000

# ACME
ACME=https://eohmc-acme-api.azurewebsites.net/api/
ACME_BIRTHDAY_WISH_EXCLUSIONS=BirthdayWishExclusions
ACME_EMPLOYEES=Employees

# REALM
MONGO_ID='tmp-assessment-rwdvy'
MONGO_SERVICE=mongodb-atlas
MONGO_DATABASE=tmp-assessment
MONGO_COLLECTION=employees

# ACME MESSAGE
ACME_MESSAGE="Happy Birthday "

# NODE MAILER
EMAIL_FROM=from@mail.com
EMAIL_DEST=dest@mail.com
EMAIL_HOST=
EMAIL_PORT=
EMAIL_USER=
EMAIL_PASS=
```
