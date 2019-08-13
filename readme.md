# arc-macro-src-folder

Change the function source folder in Architect projects

## Install

```bash
npm i arc-macro-src-folder
```

### Usage

After installing add something the following to the `.arc` file:

```arc
@app
myapp

@src
dist

@http
get /

@macros
arc-macro-src-folder
```

Running `arc deploy` will deploy the `./dist` folder instead of `./src`.
