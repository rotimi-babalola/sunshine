<template>
  <v-container class="container" fluid>
    <!-- address input -->
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
            append-icon="close"
            :append-icon-cb="iconCallback"
            >
        </vuetify-google-autocomplete>
      </v-flex>
    </v-layout>
    <!-- date picker -->
    <v-layout row>
      <v-flex xs2 class="subheader">
        <v-subheader>Enter a date (optional): </v-subheader>
      </v-flex>
      <v-flex xs4>
        <v-menu
        ref="menu"
        lazy
        :close-on-content-click="false"
        v-model="menu"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        min-width="290px"
        :return-value.sync="date"
      >
        <v-text-field
          slot="activator"
          label="Pick a date"
          v-model="date"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="closeMenu">Cancel</v-btn>
          <v-btn flat color="primary" @click="saveDate">OK</v-btn>
        </v-date-picker>
      </v-menu>
      </v-flex>
    </v-layout>

    <!-- button -->
    <v-layout row>
      <v-flex xs4 offset-sm3>
        <v-btn 
        class="go-button" 
        @click="fetchSunshine"
        :loading="loading"
        :disabled="!address"
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
      date: '',
      menu: false,
    };
  },
  methods: {
    fetchSunshine() {
      this.loading = true;
      // call sunrise api 😎 ☀️
      const sunriseUrl = `https://api.sunrise-sunset.org/json?lat=${this.latitude}&lng=${this.longitude}&date=${this.date ? this.date : 'today'}`;
      this.axios.get(sunriseUrl).then((response) => {
        this.loading = false;
        this.sunshineData = response.data;
        this.sunshineData.address = this.address;
        this.$emit('fetchSunshine', this.sunshineData);
      }).catch((error) => {
        this.error.push(error);
      });
    },
    getAddressData(addressData) {
      this.address = addressData.route;
      this.latitude = addressData.latitude;
      this.longitude = addressData.longitude;
    },
    saveDate() {
      // really don't see the point of this yet...
      // except it ensure we can close the date picker
      this.$refs.menu.save(this.date);
    },
    closeMenu() {
      this.menu = false;
    },
    iconCallback() {
      this.$refs.address.clear();
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
  margin-top: 45px;
}

.subheader {
  margin-top: 20px;
}
</style>
