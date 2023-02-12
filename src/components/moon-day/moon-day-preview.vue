<template>
  <section class="moon-day-preview" :id="dayId" :style="dayPrevStyle">
    <div class="day-preview-title">
      {{ formatDate }}
    </div>
    <div class="illum">{{ moonIllum }}%</div>
    <div class="moon-icon" :style="moonShadow" />

        <div class="moon">
      <div class="disc"></div>
    </div>

    <div class="times">
      <div class="first-horiz-cross">{{ firstHorizCross }}</div>
      <div class="second-horiz-cross">{{ secondHorizCross }}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "moon-day-preview",
  props: {
    proppedDay: Object,
  },
  data() {
    return {};
  },
  methods: {

  },
  computed: {
    day() {
      return JSON.parse(JSON.stringify(this.proppedDay));
    },
    dayId() {
      return `${this.day.date}`;
    },
    isToday() {
      const todayDate = new Date().toISOString().slice(0, 10);
      if (this.day.date === todayDate) {
        return true;
      }
    },
    dayPrevStyle() {
      let style = "";

      if (this.day.monthNum % 2) {
        style += "background-color: #333333;";
      } else style += "background-color: #5a5a5a;";

      if (this.isToday) style += "background-color: navy;";
      
      return style;
    },
    moonIllum() {
      return Math.round(this.day.moon.illum.fraction * 100);
    },
    formatDate() {
      const formatDate = `${this.day.monthName} ${this.day.dayInMonth}`;
      return formatDate;
    },
    moonShadow() {
      const phase = this.day.moon.illum.phase;
      let cover;
      const factor = 4.1;

      if (phase <= 0.5) cover = -(phase * factor);
      else cover = (1 - phase) * factor;

      return { boxShadow: `inset ${cover}em 0 1px white, 0 0 3px #444` };
    },
    firstHorizCross() {
      const rise = +this.day.moon.times.rise.slice(0, 2);
      const set = +this.day.moon.times.set.slice(0, 2);
      if (rise < set) {
        return `↑ ${this.day.moon.times.rise}`;
      } else {
        return `↓ ${this.day.moon.times.set}`;
      }
    },
    secondHorizCross() {
      const rise = +this.day.moon.times.rise.slice(0, 2);
      const set = +this.day.moon.times.set.slice(0, 2);
      if (rise > set) {
        return `${this.day.moon.times.rise} ↑`;
      } else {
        return `${this.day.moon.times.set} ↓`;
      }
    },
  },
  created() {},
  mounted() {
  },
  components: {},
};
</script>