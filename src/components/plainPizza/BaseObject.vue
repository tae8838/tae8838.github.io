<template>
  <div class='game-object' :style="{ top: positionY + 'px', left: positionX + 'px', transform: 'rotate(' + rotateDeg + 'deg)'}">
    {{ objectName }}
  </div>
</template>
<script>
export default {
  props: {
    objectName: {
      type: String,
      required: true
    },
    positionX: {
      type: Number,
      required: true
    },
    positionY: {
      type: Number,
      required: true
    },
    rotateDeg: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style>
  .game-object {
    position: absolute;
  }
</style>
