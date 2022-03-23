
## Do s

### vs code extenstion recommendation

### 1. editor config

* install vs code extension
*  config file   <prjroot>/.editorconfig

### 2. prettier

* install package
* config file  (optional -- none)
* install extension and config vscode setting (.vscode/setting.json)

```
pnpm install -D prettier
```

### 3. eslint

* install eslint
* install eslint airbnb and peers
* install eslint-config-prettier (work with pretter)
* install eslint config node
* config rules  <prjroot>/.eslintrc.js

```
$ pnpm install -D eslint
$ pnpm install -D eslint-config-airbnb 
peers
$ pnpm install -D eslint-config-prettier
$ pnpm install -D eslint-plugin-node


### update package info for lint and restart vs code



### Install typescrit

* install typescript
* config tsconfig.json
* update package info dev and build
* editerconfig on typescript (no operation known now)
* prettier on typescript
* eslint on typescript  (https://typescript-eslint.io/)

```
$ pnpm install --save-dev typescript


$ pnpm install --D  @typescript-eslint/parser @typescript-eslint/eslint-plugin
$ pnpm install --save-dev @typescript-eslint/parser

$ $ pnpm  install -D  eslint-config-airbnb-typescript
//https://www.npmjs.com/package/eslint-config-airbnb-typescript
```


### test framework. 

* while this is node project, may not be using vitejs. we can try mocha/chai (mocha support ES6 and typescript, while jest did not) 

* it looks like vitejs could support nodejs. not sure. TBC


## Do not s


### Do not use  peeky test framework
peeky test is not officially vue stack. And it's function is limited.  why not using vitest if using vitejs

```
$ pnpm install -D @peeky/test

```

### Do not use standardjs
standarjs is old, not flexible. want to do too much while each aspect is not perfect. 

1. only support javascript. its officially partner ts-standard really sucks.  ** DO NOT USE ts-standard** at all

2. for formatting, definitely not good as prettier

3. bug check,  it is based on eslint, in fact a eslint config, then why not using elsint directly with much better eslint config such as airbnb.   


@end



