## How to get started

1. npm init -y to install the package manager
2. npm i typescript
3. npx tsc --init --rootdir src --outdir lib

The above command tells typescript that all source code is located in the src folder and that all output code will be located in the lib folder.

4. npx tsc --watch (runs the TS compiler in watch mode and recompiles on the fly)

5. To run the code we can either click the green arrow, or in the terminal type

```
node lib/index.js
```
