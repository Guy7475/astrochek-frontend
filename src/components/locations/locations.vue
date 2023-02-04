<template>
  <section class="locations">
    <div @click="showNewLocation = true">+ Add New</div>
    <new-location
      v-if="showNewLocation"
      @closeModal="showNewLocation = false"
      @addNewLoc="addNewLoc"
    />
    <draggable
      :list="allLocations"
      group="locations"
      @change="updateLocationsOrder(allLocations)"
      itemKey="id"
      handle=".location-drag-handle"
      delay="250"
      :delay-on-touch-only="true"
      class="location-list"
    >
      <template #item="{ element }">
        <location
          v-if="element"
          :proppedLocation="element"
        />
      </template>
    </draggable>
  </section>
</template>

<script>
import draggable from "vuedraggable";
import newLocation from "../locations/new-location.vue";
import location from "../locations/location.vue"

export default {
  name: "locations",
  props: {},
  data() {
    return {
      showNewLocation: false,
    };
  },
  methods: {
    addNewLoc(newLocation) {
      this.showNewLocation = false;
      this.$store.dispatch({
        type: "addNewLocation",
        newLocation,
      });
    },
    updateLocationsOrder(updatedLocList){
        console.log(updatedLocList)
    },
  },
  computed: {
    allLocations() {
      return  JSON.parse(JSON.stringify(this.$store.getters.allLocations)) ;
    },
  },
  created() {},
  components: {
    newLocation,
    location,
    draggable,
  },
};
</script>