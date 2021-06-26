<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div> -->
  <div>
    <h1>TEST</h1>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import http from "axios";

export default {
  setup(): void {
    onMounted(() => {
      http
        .get("http://3.35.230.196:8989/api/ko/nowWeather")
        .then((res: unknown) => {
          console.log(res);
          return res;
        });
      console.log("Component is mounted!");
    });
  },
};
</script>
