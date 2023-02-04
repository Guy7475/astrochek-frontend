<template>
  <section class="hamb-menu main-menu">
    <div class="hamb-brick title">
      Astro-Check
      <span @click="closeModal">✖</span>
    </div>
    <router-link to="/astro-weather" @click="closeModal">
      <div class="hamb-brick">Astro Weather</div>
    </router-link>
    <router-link to="/moon-cal" @click="closeModal">
      <div class="hamb-brick">Moon Calendar</div>
    </router-link>
    <router-link to="locations" @click="closeModal">
      <div class="hamb-brick">Locations</div>
    </router-link>
    <router-link to="/contact-us" @click="closeModal">
      <div class="hamb-brick">contact Us</div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "hamb-menu",
  props: {},
  data() {
    return {
      
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
  computed: {},
  created() {},
  components: {},
};
</script>