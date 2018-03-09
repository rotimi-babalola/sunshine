<template>
    <div class="display-sunshine">
        <h2>Sunrise: {{sunshineData.results.sunrise}}</h2>
        <h2>Sunset: {{sunshineData.results.sunset}}</h2>
    </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {};
  },
  computed: {
    sunshineData: {
      get() {
        return this.data;
      },
      set(newValue) {
        this.data = newValue;
      },
    },
  },
};
</script>

<style scoped>
.display-sunshine {
  margin: 20px;
}
</style>