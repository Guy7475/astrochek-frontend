<template>
  <section class="app-body">
    <router-view />
    <success-modal />
    <error-modal />
  </section>
</template>

<script>

import homePage from "../views/home-page.vue"
import space from "../components/space/space.vue"
import contactUs from "../views/contact-us.vue"
import successModal from "../components/msg-modal/success-modal.vue";
import errorModal from "../components/msg-modal/error-modal.vue";

export default {
  name: "app-body",
  props: {},
  data() {
    return {
    };
  },
  methods: {
    closeModal() {
    },
  },
  computed: {},
  created() {},
  components: {
    homePage,
    space,
    contactUs,
    successModal,
    errorModal,
  },
};
</script>