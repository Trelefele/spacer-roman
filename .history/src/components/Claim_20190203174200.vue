<template>
    <div class="claimWrapper">
        <h1 class="claim">SPACER</h1>
        <p class="subclaim">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolore nisi tempora natus libero laborum fugit nemo.
        </p>
        <p class="subclaim">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolore nisi tempora natus libero laborum fugit nemo.
        </p>
    </div>
</template>

<script>

export default {
  name: 'Claim',
};

</script>

<style lang="scss" scoped>
.claimWrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.claim{
    font-size: 50px;
    margin: 0;
}

.subclaim{
    margin-top: 1000px 0 0 0;
    font-size: 10px;
}
</style>
