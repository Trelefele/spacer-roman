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
const API = 'https://images-api.nasa.gov/';

export default {
  name: 'Search',
  data(){
    return{
      searchValue:'',
    };
  },
  methods: {
    handleInput(e){
      console.log(this.searchValue);
    },
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
