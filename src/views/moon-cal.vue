<template>
  <section class="moon-cal">
    <section class="weekdays">
      <div class="day-title">Sun</div>
      <div class="day-title">Mon</div>
      <div class="day-title">Tue</div>
      <div class="day-title">Wed</div>
      <div class="day-title">Thu</div>
      <div class="day-title">Fri</div>
      <div class="day-title">Sat</div>
    </section>
    <section class="location-picker">
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
    </section>
    <section class="moon-cal-days">
      <div v-for="day in moonCal" :key="day.date">
        <moon-day-preview :proppedDay="day" />
      </div>
    </section>
    <div @click="centerToday">Today</div>
  </section>
</template>

<script>
import { moonCalService } from "../services/moonCalService";
import moonDayPreview from "../components/moon-day/moon-day-preview.vue";

export default {
  name: "moon-cal",
  props: {},
  data() {
    return {
      selectedLocation: null,
    };
  },
  methods: {
    centerToday() {
      const todayDate = new Date().toISOString().slice(0, 10);

      document
        .getElementById(`${todayDate}`)
        .scrollIntoView({ block: "center" });
    },
  },
  computed: {
    allLocations() {
      return this.$store.getters.allLocations;
    },
    moonCal() {
      if (!this.selectedLocation) this.selectedLocation = this.allLocations[0];
      const { long, lat } = this.selectedLocation;
      return moonCalService.dateFnsCal(2023, lat, long);
    },
  },
  created() {},
  components: {
    moonDayPreview,
  },
};
</script>