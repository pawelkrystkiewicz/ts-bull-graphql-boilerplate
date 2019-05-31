# ts-bull-graphql-boilerplate
Boilerplate for typescript projects with Bull queue manager and type-graphql

## Instalation
1. Clone project
2. `yarn`
3. Add .env
4. `yarn start`
5. Test how queries trigger your jobs at http://localhost:4000/graphql


## ENV example
```
PORT=4000
CORS_URL='http://localhost:3000'

REDIS_PASS=  #string
REDIS_HOST=  #string
REDIS_PORT=  #number

REDIS_PASS2= #string
REDIS_HOST2= #string
REDIS_PORT2= #number
```
##### Pawel Krystkiewicz 2019