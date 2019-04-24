<template>
  {{ name }}
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    position: {
      type: Object,
      required: true
    }
  }
}
</script>
<style></style>
