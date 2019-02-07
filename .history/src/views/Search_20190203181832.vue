<template>
  <div class="searchWrapper">
    <Claim/>
  <div class="search"></div>
    <label for="search">Search</label>
    <input
      id="search"
      name="search"
      v-model="searchValue"
      @input="handleInput"
      />

  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import Claim from '@/components/Claim.vue';

const API = 'https://images-api.nasa.gov/search';

export default {
  name: 'Search',
  components: {
    Claim,
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

<style lang="scss" scoped>
    .searchWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        padding: 30px;
        width: 100%
    }
</style>
