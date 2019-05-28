<template>
  <div class='game-object' :style="{ top: position.y + 'px', left: position.x + 'px', transform: 'rotate(' + rotateDeg + 'deg)'}">
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
    position: {
      type: Object,
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
