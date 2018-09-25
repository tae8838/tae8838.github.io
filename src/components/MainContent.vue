<template>
  <div class='main-content'>
    <!-- <h2 class='name'>So who is Tae Nopjtpa Wongidmvbd??</h2> -->

  </div>
</template>

<script>
</script>

<style lang="scss">
.name {
  margin: 24px 0 0.2em !important;
  line-height: 1em !important;
  font-family: 'CoolDots', serif !important;
  color: #990000;
  font-size: 6em;
}

svg {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}

$max: 5;
$stroke-step: 1%;
$colors: #360745, #D61C59, #E7D84B, #EFEAC5, #1B8798;
.text-copy {
  fill: none;
  stroke: white;
  stroke-dasharray: $stroke-step $stroke-step * (1);
  stroke-width: 1px;

  animation: stroke-offset 9s infinite linear;

  @for $item from 1 through $max {
    $stroke-color: nth($colors, $item);

    &:nth-child(#{$item}) {
      stroke: $stroke-color;
      stroke-dashoffset: $stroke-step * $item;
      }
    }
  }

@keyframes stroke-offset {
  70% {
    stroke-dashoffset: $stroke-step * $max;
    stroke-dasharray: 20 $stroke-step * $max*2.5;
  }
}
</style>