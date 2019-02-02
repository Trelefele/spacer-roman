<template>
  <div class="wrapper">
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
import debounce from 'lodash.debounce'
const API = 'https://images-api.nasa.gov/search';

export default {
  name: 'Search',
  data(){
    return{
      searchValue:'',
    };
  },
  methods: {
    // handleInput(e){
    //   axios.get(`${API}?q=${this.searchValue}&media_type=image`)
    //   .then((response)=>{
    //     console.log(response);
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   });
    // },
    handleInput: debounce(function(){
      axios.get(`${API}?q=${this.searchValue}&media_type=image`)
        .then((response) => {
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
    .wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        padding: 30px;
        width: 100%
    }
    .search{
        display: flex;
        flex-direction: column;
        width: 250px;
    }
    label{
      font-family: montserrat, sans-serif;
    }
    input {
      height: 30px;
      border: 0;
      border-bottom: 1px solid black;
    }
</style>
