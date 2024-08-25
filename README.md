## Pact Contract Testing e2e

That's a demonstration of pact flow to run locally, although it has developed for learning/teaching goals it could be adapted to any production project.

| Services           | Vendor | Description                                 |
| ------------------ | ------ | ------------------------------------------- |
| consumer-react-app | Nodejs | FrontEnd application to simulate a consumer |
| server             | Nodejs | BackEnd application to simulate a provider  |
| pact-broker        | Docker | Pact Broker provided by docker-compose      |

## Running locally

```console
git clone https://github.com/heijimor/pact-contract-testing-e2e.git
cd pact-contract-testing-e2e
```

### Start Pact Broker (docker-compose)

```console
docker-compose up -d
```

Check it out http://localhost:9292/

### React (consumer-react-app)

```console
cd consumer-react-app
npm i
jest --runInBand src/__tests__/pact.test.js
```

The last command will generate a json file in ./consumer-react-app/pacts, this folder contains pact contracts.
Then, next step is publish these generated contracts

```console
pact-broker publish ./pacts --consumer-app-version=$version --broker-base-url=http://localhost:9292
```

To check this, just refresh http://localhost:9292/, it should be there

### Nodejs (server)

```console
cd server
npm i
npm start
```

Open another termianl and run this command:

```console
jest --runInBand ./src/tests/verifier.spec.js
```

To check this, just refresh http://localhost:9292/, it should be verified as true or false

## Integrated flow - CI/CD

Needs: https://github.com/nektos/act

in the root of this project ./pact-contract-testing-e2e

all integration happens here ./github/workflows/

to up consumer version, increase package.json version it's already integrated to ./github/workflows/
Upgrade it and run it to initialize consumer workflow

```console
act
```

After that, check it out if consumer was upgrated and checked by provider
http://localhost:9292/
