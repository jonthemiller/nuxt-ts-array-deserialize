# nuxt-ts-array-deserialize

> This is a repo demonstrating a bug with nuxt's typescript support that manifests when using the json2typscript package.

This is an app created from `create-nuxt-app`. The only changes made are to add `@nuxt/typescript-build`, `@nuxt/typescript-runtime` and `json2typescript` and the code to show the bug.

Within the `assets` folder are 2 models notated with object and property decorators from the [json2typscript](https://github.com/AppVision-GmbH/json2typescript) package. The bug has to do with using these decorators to notate objects contained within arrays.

The [`index.vue`](pages/index.vue) template uses json2typescript to attempt to create a `Obj` instance from a JSON representation, and shows the bug occurring.

## Setup

``` bash
# install dependencies
$ npm run install

# serve page demonstrating bug at localhost:3000
$ npm run dev
```

