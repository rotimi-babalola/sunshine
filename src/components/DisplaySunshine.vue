<template>
    <div class="display-sunshine">
        <v-layout>
          <v-flex xs12 sm6 offset-sm1>
            <v-card class="sunshine-card" v-if="sunshineData">
            <!-- put an icon here  -->
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" v-if="address">{{address}}</h3>
                <div class="sunrise">Sunrise: {{sunshineData.sunrise}}</div>
                <div>Sunset: {{sunshineData.sunset}}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="primary">Share</v-btn>
              <v-btn flat color="primary">Explore</v-btn>
            </v-card-actions>
          </v-card>
          </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {};
  },
  console: window.console,
  computed: {
    sunshineData: {
      get() {
        return this.data.results;
      },
      set(newValue) {
        this.data = newValue;
      },
    },
    address: {
      get() {
        return this.data.address;
      },
    },
  },
};
</script>

<style scoped>
.display-sunshine {
  margin: 20px;
}

.sunrise {
  margin-top: 10px;
  margin-bottom: 5px;
}

.sunshine-card {
  max-width: 350px;
}
</style>