# AngularTesting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Angular testing with JEST

1. Remove any reference to Jasmine / Karma in the package.json
```
npm remove <karma karma-chrome-launcher...>
```

2. Install Jest
```
npm install --save-dev jest jest-preset-angular @types/jest
```

3. Create the ```setup-jest.ts``` file in the root folder of the project with the following content
```setup-jest.ts
import 'jest-preset-angular/setup-jest';
```

4. In the package.json add the following configuration
```package.json
"jest": {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/setup-jest.ts"
    ],
    "globalSetup": "jest-preset-angular/global-setup"
  }
```


4. Configurate JEST in tsconfig.json and tsconfig.spec.json
```tsconfig.json
"types": [
  "jest"
]
```

5. Configure the commands to run the tests in the package.json
```package.json
"test": "jest",
"test:watch": "jest --watchAll",
```

6. Remove karma.config.js and the test.ts file



