<template>
  <div class="wrapper">
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

        display:flex;
        flex-direction: column;
        align-items: center;
        margin:0;
        padding:30px;
        width:100%
    }
    .search{
        width: 300px;
    }
</style>
