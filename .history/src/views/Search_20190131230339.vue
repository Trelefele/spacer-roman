<template>
  <div class="wrapper">
  <div class="search"></div>
    <label for="search">Search</label>
    <input id="search" name="search"/>
  </div>
</template>

<script>
export default {
  name: 'Search',
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
        width: 500px;
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
