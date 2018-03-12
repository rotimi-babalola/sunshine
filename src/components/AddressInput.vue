<template>
  <v-container class="container" fluid>
    <v-layout row>
      <v-flex xs2 class="subheader">
        <v-subheader>Enter a location</v-subheader>
      </v-flex>
      <v-flex xs4>
        <vuetify-google-autocomplete
            ref="address"
            id="map"
            classname="form-control"
            placeholder="Please type your address"
            v-on:placechanged="getAddressData"
            v-model="address"
        >
        </vuetify-google-autocomplete>
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
      sunshineData: {},
      error: [],
      loading: false,
    };
  },
  methods: {
    fetchSunshine() {
      this.loading = true;
      // call sunrise api 😎
      // accept optional time value???
      const sunriseUrl = `https://api.sunrise-sunset.org/json?lat=${this.latitude}&lng=${this.longitude}`;
      this.axios.get(sunriseUrl).then((response) => {
        this.loading = false;
        this.sunshineData = response.data;
        this.sunshineData.address = this.address;
        this.$emit('fetchSunshine', this.sunshineData);
        // clear address if API call is successful
        this.address = '';
      }).catch((error) => {
        this.error.push(error);
      });
    },
    getAddressData(addressData) {
      this.address = addressData.route;
      this.latitude = addressData.latitude;
      this.longitude = addressData.longitude;
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
