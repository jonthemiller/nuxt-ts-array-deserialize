<template>
  <div class="container">
    <div>
      <h1 class="title">
        nuxt-ts-example
      </h1>
      <h2 class="subtitle">
        My geometric Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { JsonConvert } from 'json2typescript';
import Obj from 'assets/Obj';
import Vue from 'vue';

export default Vue.component('Index', {
  name: 'Index',
  data () {
    return {};
  },
  asyncData (context) {
    // create object representation of model
    const jsonObj = {
      items: [
        {
          bar: 'somestring'
        }
      ]
    };
    // init the converter
    let jsonConvert = new JsonConvert();
    // attempt to create an Obj instance from the JS object
    // error gets thrown here
    let convertedObj = jsonConvert.deserializeObject(jsonObj, Obj);
    // log out the obj
    console.log(convertedObj);
    // check to make sure that the "items" on the obj are actual instances of Item by calling method in class
    if (convertedObj.items) {
      convertedObj.items.map(item => console.log(item.getBar()));
    }
    return {
      convertedObj
    };
  }
});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
