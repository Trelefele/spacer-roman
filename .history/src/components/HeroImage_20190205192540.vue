<template>
    <div class="heroImageWrapper"/>
</template>

<script>
export default {
    name: "HeroImage"
}
</script>

<style>
.heroImageWrapper{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-image: url('../assets/heroimage.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 80%, 0%;
}
</style>
