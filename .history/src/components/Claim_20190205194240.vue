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
  name: "Claim"
};
</script>

<style lang="scss" scoped>
.claimWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;   
  margin: 0;
}

.claim {
  font-size: 50px;
  margin: 0;

    @media (min-width: 768px) {
        font-size: 80px;
    }
    @media (min-width: 1024px) {
        font-size: 80px;
    }
}

.subclaim {
  margin: 20px 0 0 0;
  width: 500px;
  font-size: 13px;
  font-weight: 300;

    @media (min-width: 768px) {
        font-size: 17px;
        line-height: 1;
        letter-spacing: 1px;
    }
}
</style>
