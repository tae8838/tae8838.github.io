<template>
  <div class="projects container" data-aos="fade-up">
    <h2 class='header'>Random Projects:</h2>
    <div class="row">
      <div @click="decisionMakerRedicrect" class="col-sm-4 item">
        <p>
          Decision Maker
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      decisionMakerRedicrect () {
        window.location.href = '/#/decision-maker'
      }
    }
  }
</script>

<style scoped>
.header {
	margin-bottom: 20px;
}
.icon {
  width:50px;
}

.item {
  cursor: pointer;
}

@media screen and (max-width: 575px) {
  .item {
    margin: 30px;
  }
}
</style>
