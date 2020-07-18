This shows how to use aliases with the serverless-bundle test command.

# How to use ?
```bash
$ git clone https://github.com/chanthafef/serverless-bundle-test-with-alias.git
$ cd serverless-bundle-test-with-alias
$ npm install
$ npm run test
```
# What's going on ?
First, I created libs/sum.js.

Then, in serverless.yaml I added:
```bash
custom:
  bundle:
    aliases:
      - libs: libs
```

Finally, in package.json I added :
```bash
"jest": {
    "moduleNameMapper": {
      "libs(.*)$": "<rootDir>/libs/$1"
    }
  }
```

Whe can now import libs/sum as an alias in our handler:  
```bash
import sum from 'libs/sum"
// instead of
// import sum from '../libs/sum'
```

```serverless-bundle test``` now works with an alias.

# doc
jest moduleNameMapper:
https://jestjs.io/docs/en/configuration#modulenamemapper-objectstring-string--arraystring
