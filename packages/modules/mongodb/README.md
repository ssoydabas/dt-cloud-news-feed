# DT-Cloud/MongoDB

This package provides abstractions to connect, communicate and manage the `@dt-cloud/mongodb` database.

## ENV Variables

To set up the required environment variables, a `.env` file should be created in `@dt-cloud/api` root folder.

You can use the `example.env` file content to construct the `.env` file and then fill it with values:

```sh
cp example.env .env
```

> If needed, please contact the dt-cloud administrator to receive access to the secret values.

## NPM Commands

### Build

Builds the dist folder from the source code.

```sh
npm run build
```

### Start Development

Watches any changes and rebuilds if finds any.

```sh
npm run dev
```

### Lint

Checks the possible linting errors in the code. You can use the following command to fix some minor errors easily: `npm run lint -- --fix`.

```sh
npm run lint
```
