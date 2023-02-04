<template>
  <section class='moon-cal'>
      <select v-model="selectedLocation" class="form-item">
        <option value="" disabled />
        <option
          v-for="location in allLocations"
          :key="location._id"
          :value="location"
          :lable="location.title"
        >
          {{ location.title }}
        </option>
      </select>
      <section v-for="day in moonCal" :key="day.date" class="moon-cal-days">
        {{day.date}}
      </section>
  </section>
</template>

<script>
import {moonCalService} from '../services/moonCalService'

export default {
  name: 'moon-cal',
  props: {},
  data() {
      return {
         selectedLocation: null,
      };
  },
  methods: {

  },
  computed: {
    allLocations() {
        return this.$store.getters.allLocations;
    },
    moonCal() {
      if (!this.selectedLocation) this.selectedLocation = this.allLocations[0]
      const {long, lat} = this.selectedLocation
      return moonCalService.dateFnsCal(2023, lat, long)
    }
  },
  created() {
    
  },
  components: {

  },
}
</script>