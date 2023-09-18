# DT Cloud

Welcome to DT Cloud, a project to make personalized news available for everybody.

# Monorepo

This repository is a monorepo where sub-packages are located in the `/packages` directory.

# Sub-Packages

- `packages/apps` - applications with executables.
- `packages/modules` - shared modules that can be consumed by other packages.

## Apps

1. [@dt-cloud/mobile-app](https://github.com/): react application for getting news.

2. [@dt-cloud/api](https://github.com): DT Cloud API server.

## Modules

1. [MongoDB](https://github.com): provides abstractions to connect, communicate and manage the MongoDb database.

2. [Mailing](https://github.com): provides abstractions for sending emails.

## 1. DT Cloud Web App

### Build the image

Run the following command to build an image using `Dockerfile.web` in the parent directory. `-f` flag specifies the file location and `-t` enables tagging the image to use it more conveniently.

```docker
docker build -t dt-cloud-web -f Dockerfile.web .
```

## 2. DT Cloud Api

### Build the image

Run the following command to build an image using `Dockerfile.api` in the parent directory. `-f` flag specifies the file location and `-t` enables tagging the image to use it more conveniently.

```docker
docker build -t dt-cloud-api -f Dockerfile.api .
```

# Starting Development Server with Docker Compose

After providing the needed environment variables (please refer to `README.md` files for each package and module), run the following command in the project root folder.

```docker
docker compose up
```
