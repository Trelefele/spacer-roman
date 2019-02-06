<template>
    <div v-for="item in items"></div>
        <p>"item.links[0].href"</p>
    </div>
</template>

<script>
export default {
    name: 'Item',
    item{
        type: Object,
        required: true,
    },
    data(){
        return{
            photo: this.item.links[0].href,
            title: this.item.links[0].title,
            style{
                backgroundImage: 'url("${this.photo}")',
            },
        };
    },
}
</script>

<style lang="scss" scoped>
    .item
    {
        width: 300px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
    }
</style>

