<template>
    <div class="searchInputWrapper">
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
export default {
    name: 'SearchInput',
    data: function(){
        return 1;
    },
};
</script>

<style lang="scss" scoped>
    .searchInputWrapper {
        display: flex;
        flex-direction: column;
        width: 250px;
    }
    input {
      height: 30px;
      border: 0;
      border-bottom: 1px solid black;
    }
</style>

