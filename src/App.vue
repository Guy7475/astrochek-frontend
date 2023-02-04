<template>
  <section class="main-app">
    <app-header />
    <app-body />
    <app-footer />
  </section>
</template>

<script>
import appHeader from "../src/components/header/app-header.vue";
import appBody from "./views/app-body.vue";
import appFooter from "../src/components/footer/app-footer.vue";

export default {
  name: "app",
  methods: {},
  created() {
    this.$store.dispatch({
      type: "loadLocations",
    });

    
  },
  unmounted() {
    
  },
  components: {
    appHeader,
    appBody,
    appFooter,
  },
};
</script>

<style>
</style>