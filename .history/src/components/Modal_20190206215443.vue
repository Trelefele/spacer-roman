<template>
    <div class="outerWrapper">
        <div class="innerWrapper">
            <div class="photos">

            </div>
            <div class="description">
                <h2 class="title">Lorem ipsum</h2>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing
                     elit. Odio dignissimos sunt debitis quas dolorum, quis eum maiores 
                     recusandae voluptatem assumenda quae? Eligendi expedita placeat
                      voluptates voluptatem voluptas error inventore obcaecati.</p>
            </div>
        </div>
        <div class="close"/>>
    </div>
</template>

<script>
export default {
    name: 'Modal',
};
</script>

<style lang="scss" scoped>
    .outerWrapper{
        background: #f6f6f6;
        max-width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
    }
    .innerWrapper{
        display: flex;
        height: 100%;
        padding: 50px;
        justify-content: center;
        align-items: center;
    }
</style>

