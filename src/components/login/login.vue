<template>
  <section class="login">
    <div v-if="loggedUser">
      <span>{{ loggedUser.username }}</span>
      <button @click="logout">logout</button>
    </div>
    <form v-else @submit.prevent="login">
      <input v-model="cred.username" type="text" placeholder="username" />
      <input v-model="cred.password" type="text" placeholder="password" />
      <button>login</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "login",
  props: {},
  data() {
    return {
      cred: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch({
        type: "login",
        cred: this.cred,
      });
    },
    logout() {
      this.$store.dispatch({ type: "logout" });
    },
  },
  computed: {
    loggedUser() {
      return this.$store.getters.loggedUser;
    },
  },
  created() {},
  components: {},
};
</script>