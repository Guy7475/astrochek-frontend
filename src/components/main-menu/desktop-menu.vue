<template>
  <section class="desktop-menu main-menu">
    <nav>
      <router-link to="/astro-weather" class="menu-item">Weather</router-link>
      <router-link to="/moon-cal" class="menu-item">Calendar</router-link>
      <router-link to="/locations" class="menu-item">Locations</router-link>
      <router-link to="/contact-us" class="menu-item">Contact</router-link
      >
    </nav>
  </section>
</template>

<script>
export default {
  name: "desktop-menu",
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {},
  components: {},
};
</script>