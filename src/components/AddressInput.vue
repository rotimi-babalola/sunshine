<template>
  <v-container class="container" fluid>
    <v-layout row>
      <v-flex xs2 class="subheader">
        <v-subheader>Enter a location</v-subheader>
      </v-flex>
      <v-flex xs4>
        <v-text-field
          name="input-3"
          label="Location"
          id="address"
          v-model="address"
        ></v-text-field>
      </v-flex>
      <v-flex xs4>
        <v-btn 
        class="go-button" 
        @click="fetchSunshine"
        :loading="loading"
        @click.native="loader = 'loading'">
          Go!
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      address: '',
      sunshineData: [],
      error: [],
      loading: false,
    };
  },
  methods: {
    geoCode(address) {
      const geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyACsOOaTMdzaRGfYETTkc_5FsmW52fqTbU`;
      return this.axios.get(geoCodeUrl).then((response) => {
        return {
          latitude: response.data.results[0].geometry.location.lat,
          longitude: response.data.results[0].geometry.location.lng,
        };
      }).catch((error) => {
        this.error.push(error);
      });
    },
    fetchSunshine() {
      this.loading = true;
      this.geoCode(this.address).then((data) => {
        const { latitude, longitude } = data;
        // call sunrise api 😎
        // accept optional time value???
        const sunriseUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`;
        this.axios.get(sunriseUrl).then((response) => {
          this.loading = false;
          this.sunshineData = response.data;
          this.$emit('fetchSunshine', this.sunshineData);
        });
      }).catch((error) => {
        this.error.push(error);
      });
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.container {
  margin: 20px;
}

.go-button {
  margin-top: 13px;
}

.subheader {
  margin-top: 20px;
}
</style>
