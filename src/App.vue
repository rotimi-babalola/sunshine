<template>
  <v-app>
    <v-toolbar class="blue-grey lighten-1">
      <v-toolbar-title>Sunshine App</v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat>Vue</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <address-input @fetchSunshine="fetchSunshine"/>
      <display-sunshine :data.sync="result"/>
    </v-content>
  </v-app>
</template>

<script>
import AddressInput from './components/AddressInput';
import DisplaySunshine from './components/DisplaySunshine';

export default {
  data() {
    return {
      result: []
    };
  },
  name: 'App',
  components: {
    AddressInput,
    DisplaySunshine,
  },
  created() {
    this.sayHello();
  },
  methods: {
    sayHello() {
      // console.log('hello');
    },
    fetchSunshine(data) {
      console.log(data, 'fetchSunshine')
      this.result = data;
    }
  },
};
</script>
