<template>
  <section class="location">
    <span class="location-drag-handle">::</span>
    {{ proppedLocation.title }}
    <br>
    Lat: {{ proppedLocation.lat }}
    <br>
    Long: {{ proppedLocation.long }}
    <br>
    <span @click="removeLocation">X</span>
    <br>
    <br>
  </section>
</template>

<script>
export default {
  name: "location",
  props: {
    proppedLocation: Object,
  },
  data() {
    return {};
  },
  methods: {
    removeLocation() {
        this.$store.dispatch({
            type: 'removeLocation',
            locationId: this.location._id     
        })
    },
  },
  computed: {
    location() {
        return  JSON.parse(JSON.stringify(this.proppedLocation))
    },
  },
  created() {},
  components: {},
};
</script>