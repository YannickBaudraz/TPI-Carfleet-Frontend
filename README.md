# CarFleet front end v0.2.0

This is the front-end application of CarFleet.

### Prerequisites

- Nodejs with npm -> https://nodejs.org/en/download
- Yarn globally -> `npm install --global yarn`

## Installation

Run `yarn install`.

## Build

Run `yarn build` to build the project to production. The build artifacts will be stored in the `dist/` directory.
flag for a production build.

## Usage

### Development server

Run `yarn start:dev` for a dev server. The app will automatically reload if you
change any of the source files.

Navigate to `http://localhost:4200/`.

### Production server

Run `yarn start` for a production server.

Navigate to `http://localhost:4200/`.

## Documentation

Run `yarn gerenate:doc` to generate API documentation in the folder _documentation_.

The command `yarn generate:doc:serve` starts a server at the port 51002 and open the doc in the default browser
after the generation is complete.

## Tests

_There is only basic tests of the front-end application._

### Unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### End-to-end tests

Run `yarn e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
