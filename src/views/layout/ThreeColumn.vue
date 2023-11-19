<script setup lang="ts">

</script>

<template>
  <p class="title">float + margin-left/right</p>
  <div class="three-column-float">
    <aside></aside>
    <div></div>
    <main></main>
  </div>

  <p class="title">float + overflow</p>
  <div class="three-column-float-overflow">
    <aside></aside>
    <div></div>
    <main></main>
  </div>

  <p class="title">absolute</p>
  <div class="three-column-absolute">
    <aside></aside>
    <main></main>
    <div></div>
  </div>

  <p class="title">flex</p>
  <div class="three-column-flex">
    <aside></aside>
    <main></main>
    <div></div>
  </div>

</template>

<style lang="scss" scoped>

$namespace: 'three-column';

.title {
  @include mt(50);
}

@include b($namespace, float) {
  width: 100%;
  height: 400px;

  aside,
  main,
  div {
    height: 100%;
  }
  aside {
    float: left;
    width: 50px;
    background-color: red;
  }

  main {
    margin-left: 50px;
    margin-right: 50px;
    background-color: green;
  }

  div {
    float: right;
    width: 50px;
    background-color: #66f;
  }
}

@include b($namespace, float-overflow) {
  width: 100%;
  height: 400px;

  aside,
  main,
  div {
    height: 100%;
  }

  aside {
    float: left;
    width: 50px;
    height: 100%;
    background-color: red;
  }

  main {
    margin-left: 50px;
    margin-right: 50px;
    overflow: hidden;
    background-color: green;
  }

  div {
    width: 50px;
    float: right;
    background-color: #66f;
  }
}

// .#{$namespace}-absolute {
//   position: relative;
//   width: 100%;
// 	height: 400px;
//   // @include mt(50);

//   aside, main {
//     position: absolute;
//     top: 0;
//     bottom: 0;
//   }
//   aside {
//     position: absolute;
//     left: 0;
//     width: 50px;
//     height: 100%;
//     background-color: red;
//   }

//   main {
//     left: 50px;
//     right: 0;
//     background-color: green;
//   }

// }

@include b($namespace, absolute) {
  width: 100%;
  height: 400px;
  position: relative;

  aside,
  main,
  div {
    top: 0;
    bottom: 0;
    position: absolute;
    height: 100%;
  }


  aside {
    width: 50px;
    left: 0;
    background-color: red;
  }

  main {
    left: 50px;
    right: 50px;
    background-color: green;
  }

  div {
    right: 0;
    width: 50px;
    background-color: #66f;
  }
}

@include b($namespace, flex) {
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

  div {
    width: 50px;
    background-color: #66f;
  }
}
</style>
