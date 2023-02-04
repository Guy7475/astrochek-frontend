<template>
  <header class="app-header">
    <div class="main-menu-container">
      <desktop-menu />
      <span @click="toggleHamb" class="hamb-icon">☰</span>
      <hamb-menu v-if="isHambOpen" @closeModal="toggleHamb" />
    </div>
    <div class="logo-container">
      <div class="logo">Logo</div>
    </div>
    <!-- <login /> -->
    <div v-if="isHambOpen" @click="toggleHamb" class="overlay" />
  </header>
</template>

<script>
import desktopMenu from "../main-menu/desktop-menu.vue";
import hambMenu from "../main-menu/hamb-menu.vue";
import login from "../login/login.vue";

export default {
  name: "app-header",
  props: {},
  data() {
    return {
      isShown: false,
    };
  },
  methods: {
    closeModal() {
      this.isShown = false;
    },
    toggleHamb() {
      this.$store.commit({
        type: "toggleHamb",
      });
    },
  },
  computed: {
    isHambOpen() {
      return this.$store.getters.isHambOpen;
    },
  },
  created() {},
  components: {
    desktopMenu,
    hambMenu,
    login,
  },
};
</script>