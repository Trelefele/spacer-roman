<template>
    <div class="claimWrapper">
        <h1 class="claim">SPACER</h1>
        <p class="subclaim">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi tempora natus libero laborum fugit nemo. Sequi fugiat minima similique fugit quo odit rerum numquam corrupti, ut ullam ex quos.
        </p>
        <p class="subclaim">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi tempora natus libero laborum fugit nemo. Sequi fugiat minima similique fugit quo odit rerum numquam corrupti, ut ullam ex quos.
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

    }

    .subclaim{
        margin-top: 40 0 0 0;
        font-size: 13px;
    }
</style>

