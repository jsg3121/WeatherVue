<template>
  <div class="test">
    <h1>@decorator test</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {}
})
export default class Weather extends Vue {
  setup() {
    Mounted(() => {
      console.log("It's Vue 3 wow!!!!!");
    });
  }
}
</script>
