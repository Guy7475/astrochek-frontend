<template>
  <section class="moon-cal">
    <section class="moon-cal-header">
      <div class="location-picker">
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
      </div>
      <div class="date-picker">
        <input type="date" v-model="selectedDate" @change="jumpToDate" />
      </div>
      <div class="weekdays">
        <div class="day-title">Sun</div>
        <div class="day-title">Mon</div>
        <div class="day-title">Tue</div>
        <div class="day-title">Wed</div>
        <div class="day-title">Thu</div>
        <div class="day-title">Fri</div>
        <div class="day-title">Sat</div>
      </div>
    </section>
    <section class="moon-cal-days-grid">
      <div v-for="day in moonCal" :key="day.date">
        <moon-day-preview :proppedDay="day" @click="openDayDetail(day.date)"/>
      </div>
    </section>
    <section class="day-details">
      <div v-for="day in moonCal" :key="day.date">
        <day-details :proppedDay="day" />
      </div>
    </section>
  </section>
</template>

<script>
import { moonCalService } from "../services/moonCalService";
import moonDayPreview from "../components/moon-day/moon-day-preview.vue";
import dayDetails from "../components/moon-day/day-details.vue";

export default {
  name: "moon-cal",
  props: {},
  data() {
    return {
      selectedLocation: null,
      selectedDate: null,
    };
  },
  methods: {
    openDayDetail(date) {
      
    },
    centerToday() {
      const todayDate = new Date().toISOString().slice(0, 10);
      document
        .getElementById(`${todayDate}`)
        .scrollIntoView({ block: "center" });
    },
    jumpToDate() {
      document
        .getElementById(`${this.selectedDate}`)
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
    isToday() {
      const todayDate = new Date().toISOString().slice(0, 10);
      if (this.day.date === todayDate) {
        return true;
      }
    },
  },
  created() {},
  mounted() {
    this.centerToday();
  },
  components: {
    moonDayPreview,
    dayDetails,
  },
};
</script>