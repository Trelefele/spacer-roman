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
    .close{
        position: absolute;
        width: 30px;
        height: 30px;
        padding: 30px;
        right: 0;
        top: 0;
        cursor: pointer;
        &::before,
        &::after{
            position: absolute;
            top: 20px;
            right: 20px;
            content: '';
            width: 10px;
            height: 2px;
            background: black;
            display: block;
        }

        &::before{
            transform: rotate(45deg);
        }
        &::after{
            transform: rotate(-45deg);
        }
    }
    .innerWrapper{
        display: flex;
        height: 100%;
        padding: 50px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        .photo{
            width: 90%; 
            height: 50%;
        }
        img{
            width: 100%;
        }

        .description{
            color: #333;
        }
    }
</style>

