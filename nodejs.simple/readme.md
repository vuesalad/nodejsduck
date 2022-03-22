
## Do-es

### Using vitest for testing

```
pnpm install -D prettier

pnpm install -D eslint
$ pnpm init @eslint/config   /*generate config file* /   will generate the .eslintrc.*  however, look like not necessary.  it optional install the package using npm instead of pnpm, not good at all.


$ pnpm install —-save-dev eslint-config-airbnb 
$ pnpm info "eslint-config-airbnb@latest" peerDependencies
$ npx install-peerdeps --dev eslint-config-airbnb   /*dnot use it, it default using npm instead of pnpm*/, using pnpm to install individual packages

```

Install eslint-config-prettier:

npm install --save-dev eslint-config-prettier
Then, add "prettier" to the "extends" array in your .eslintrc.* file. Make sure to put it last, so it gets the chance to override other configs.

{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}


## Do not

### Using peeky test framework

```
$ pnpm install -D @peeky/test

```
