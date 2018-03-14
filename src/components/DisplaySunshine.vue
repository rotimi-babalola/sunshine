<template>
    <div class="display-sunshine">
        <v-layout>
          <v-flex xs12 sm6 offset-sm1>
            <v-card class="sunshine-card" v-if="sunshineData">
            <!-- put an icon here  -->
            <v-card-title primary-title>
              <div style="line-height: 30px">
                <h3 class="headline mb-0" v-if="address">{{address}}</h3>
                <div class="sunrise">Sunrise: {{sunshineData.sunrise}} 
                  <span title="sunrise">
                    <svg viewBox="0 0 24 24" class="sun-icons">
                      <path fill="#000000" d="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,16.3L15.82,19.41C16.21,19.8 16.21,20.43 15.82,20.82C15.43,21.21 14.8,21.21 14.41,20.82L12,18.41L9.59,20.82C9.2,21.21 8.57,21.21 8.18,20.82C7.79,20.43 7.79,19.8 8.18,19.41L11.29,16.3C11.5,16.1 11.74,16 12,16C12.26,16 12.5,16.1 12.71,16.3Z" />
                  </svg>
                  </span>
                </div>
                <div>Sunset: {{sunshineData.sunset}}
                  <span>
                    <svg viewBox="0 0 24 24" class="sun-icons" title="sunset">
                      <path fill="#000000" d="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,20.71L15.82,17.6C16.21,17.21 16.21,16.57 15.82,16.18C15.43,15.79 14.8,15.79 14.41,16.18L12,18.59L9.59,16.18C9.2,15.79 8.57,15.79 8.18,16.18C7.79,16.57 7.79,17.21 8.18,17.6L11.29,20.71C11.5,20.9 11.74,21 12,21C12.26,21 12.5,20.9 12.71,20.71Z" />
                  </svg>
                  </span>
                </div>
                <div>Day Length: {{sunshineData.day_length}}
                  <span class="sun-icons" title="length of day">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="#000000" d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z" />
                    </svg>
                  </span>
                </div>
                <div>Solar Noon: {{sunshineData.solar_noon}}</div>
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

.sun-icons {
  width:24px;
  height:24px;
  position: absolute;
  margin-left: 5px;
}
</style>