<template>
    <div :style="style" class="item"/>
</template>

<script>
export default {
    name: 'Item',
    props:{
        item:{
            type: Object,
            required: true,
        },
    },
    data(){
        return{
            photo: this.item.links[0].href,
            title: this.item.data[0].title,
            style: {
                backgroundImage: `url("${this.photo}")`,
            },
        };
    },
};
</script>

<style lang="scss" scoped>
    .item
    {
        height: 300px;
        width: 300px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
    }
</style>

