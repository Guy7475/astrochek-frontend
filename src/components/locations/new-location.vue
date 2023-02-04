<template>
  <section class="new-location">
    <form @submit.prevent="addNewLoc">
      <div>
        Site Name:
        <input
          v-model="newLoc.title"
          type="text"
          minlength="2"
          maxlength="25"
          required
        />
      </div>
      <div>
        Latitude:
        <input
          v-model="newLoc.lat"
          type="number"
          min="-90.00"
          max="90.00"
          step="any"
          required
        />
      </div>
      <div>
        Longitude:
        <input
          v-model="newLoc.long"
          type="number"
          min="-180"
          max="180"
          step="any"
          required
        />
      </div>
      <button type="submit">Add</button>
    </form>
    <div @click="closeModal">X</div>
    <a href="https://www.latlong.net/" target="_blank" rel="noopener noreferrer">
    Longitude / Latitude finder
    </a>
  </section>
</template>

<script>
export default {
  name: "new-location",
  props: {},
  data() {
    return {
      newLoc: {
        title: null,
        lat: null,
        long: null,
      },
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    addNewLoc() {
      this.$emit("addNewLoc", this.newLoc);
    },
  },
  computed: {

  },
  created() {},
  components: {},
};
</script>