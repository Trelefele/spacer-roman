<template>
  <div class="app">
    <div :class="[{flexStart:step === 1 }, 'wrapper']">
    <HeroImage v-if="step === 0"/>
    <Claim v-if="step === 0"/>
    <SearchInput v-model="searchValue" @input="handleInput" :dark="step === 1"/>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import Claim from '@/components/Claim.vue';
import HeroImage from '@/components/HeroImage.vue';
import SearchInput from '@/components/SearchInput.vue';

const API = 'https://images-api.nasa.gov/search';

export default {
  name: 'App',
  components: {
    Claim,
    SearchInput,
    HeroImage
  },
  data() {
    return {
      loading: false,
      step: 0,
      searchValue: '',
      results: [],
    };
  },
  methods: {
    // eslint-disable-next-line
    handleInput: debounce(function(){
      this.loading = true;
      console.log(this.searchValue);
      axios.get(`${API}?q=${this.searchValue}&media_type=image`)
        .then((response) => {
          // this.results = response.data.collection.items;
          this.results = response.data.collection.items;
          this.loading = true;
          this.step = 1;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500),
  },
};
</script>

<style lang="scss" >
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800');

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-asx-font-smoothing: antialiased;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}
.wrapper {
    margin: 0;
    width: 100%;
    min-height: 100vh;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
