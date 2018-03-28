<template>
    <div class="display-sunshine">
        <v-layout>
          <v-flex xs12 sm6 offset-sm1>
            <div class="sunshine-div" v-if="sunshineData">
              <h4 v-if="address" class="address">{{address}}</h4>
              <div class="sunshine-display">
                <div class="sunrise-info">
                  <img src="../assets/sunrise-100px.svg" alt="Sun rising over the horizon" width="100px" class="sunrise-image">
                  <p style="color: #485056; margin-bottom: 5px;">First light at {{sunshineData.nautical_twilight_begin | formatUTC(utcOffset)}}</p>
                  <p style="margin-top: 0px;">Sunrise time:  
                    <strong class="sunshine-time">{{sunshineData.sunrise | formatUTC(utcOffset)}}</strong>
                  </p>
                </div>
                <div class="sunset-info">
                  <img src="../assets/sunset-100px.svg" alt="Sun setting over the horizon" width="100px" class="sunrise-image">
                  <p style="margin-top: 10px; margin-bottom: 0px;">Sunset time:  
                    <strong class="sunshine-time sunset">{{sunshineData.sunset | formatUTC(utcOffset)}}</strong>
                  </p>
                  <p style="color: #485056;">Last light at {{sunshineData.nautical_twilight_end | formatUTC(utcOffset)}}</p>
                </div>
              </div>
            </div>
          </v-flex>
        </v-layout>
    </div>
</template>

<script>
import moment from 'moment';

export default {
  props: ['data'],
  data() {
    return {};
  },
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
    utcOffset: {
      get() {
        return this.data.utcOffset;
      },
    },
  },
  filters: {
    formatUTC(dateString, utcOffset) {
      const date = moment(dateString, 'h:mm:ss A');
      date.add(utcOffset / 60, 'hours');
      return date.format('h:mm:ss A');
    },
  },
};
</script>

<style scoped>
.display-sunshine {
  margin: 20px;
}

.sunshine-div {
  width: 100%;
  height: 250px;
  max-width: 500px;
}

.address {
  padding-top: 15px;
  padding-left: 15px;
}

.sunshine-display {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.sunrise-info {
  grid-column: 1;
  margin-top: 15px;
  margin-left: 20px;
  text-align: center;
}

.sunset-info {
  grid-column: 2;
  margin-top: 15px;
  text-align: center;
}

.sunshine-time {
  display: block;
  font-size: 140%;
  color: #cfa22b;
}

.sunshine-time.sunset {
  color: #ce2c27;
}
</style>