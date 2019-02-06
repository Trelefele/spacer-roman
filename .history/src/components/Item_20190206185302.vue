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

</style>

