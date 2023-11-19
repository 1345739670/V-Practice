<script setup lang="ts">

</script>

<template>
  <!-- <p>两列布局</p> -->
  <!-- float: -->
  <p class="title">float + margin-left/right</p>
  <div class="two-column-float">
    <aside></aside>
    <main></main>
  </div>

  <p class="title">float + overflow</p>
  <div class="two-column-float-overflow">
    <aside></aside>
    <main></main>
  </div>

  <p class="title">flex</p>
  <div class="two-column-flex">
    <aside></aside>
    <main></main>
  </div>

</template>

<style lang="scss" scoped>

$namespace: 'two-column';

.title {
  @include mt(50);
}

@include b($namespace, float) {
  width: 100%;
  height: 400px;
  aside {
    float: left;
    width: 50px;
    height: 100%;
    background-color: red;
  }

  main {
    margin-left: 50px;
    height: 100%;
    background-color: green;
  }
}

@include b($namespace, float-overflow) {
  width: 100%;
  height: 400px;
  aside {
    float: left;
    width: 50px;
    height: 100%;
    background-color: red;
  }

  main {
    // margin-left: 50px;
    overflow: hidden;
    height: 100%;
    background-color: green;
  }
}

.#{$namespace}-absolute {
  position: relative;
  width: 100%;
	height: 400px;
  // @include mt(50);

  aside, main {
    position: absolute;
    top: 0;
    bottom: 0;
  }
  aside {
    position: absolute;
    left: 0;
    width: 50px;
    height: 100%;
    background-color: red;
  }

  main {
    left: 50px;
    right: 0;
    background-color: green;
  }

}

@include b($namespace, flex) {
  // background-color: red;
  width: 100%;
  height: 400px;
  display: flex;
  

  aside {
    width: 50px;
    background-color: red;
  }

  main {
    flex: 1;
    background-color: green;
  }
}
</style>
