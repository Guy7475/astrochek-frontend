<template>
  <section class='space'>
    <pre>{{allSpaces}}</pre>
  </section>
</template>

<script>

export default {
  name: 'space',
  props: {},
  data() {
      return {
         
      };
  },
  methods: {

  },
  computed: {
    allSpaces() {
        return this.$store.getters.allSpaces;
    },
  },
  created() {},
  components: {

  },
}
</script>