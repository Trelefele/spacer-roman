<template>
  <div class="app">
    <div class="searchWrapper">
    <Claim/>
    <SearchInput/>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import Claim from '@/components/Claim.vue';
import SearchInput from '@/components/SearchInput.vue';

const API = 'https://images-api.nasa.gov/search';

export default {
  name: 'Search',
  components: {
    Claim,
    SearchInput,
  },
  data() {
    return {
      searchValue: '',
      results: [],
    };
  },
  methods: {
    // eslint-disable-next-line
    handleInput: debounce(function(){
      axios.get(`${API}?q=${this.searchValue}&media_type=image`)
        .then((response) => {
          // this.results = response.data.collection.items;
          this.results = response.data.collection.items;
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
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}
.searchWrapper {
    margin: 0;
    width: 100%;
    height: 100vh;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('./assets/heroimage.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 80%, 0%;
}
</style>
