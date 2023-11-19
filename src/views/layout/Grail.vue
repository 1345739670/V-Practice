<script setup lang="ts">

</script>

<template>
  <p class="title">float + margin-left/right + padding-left/right</p>
  <div class="grail-float">
    <header></header>
    <section class="content">
      <main class="center column"></main>
      <aside class="left column"></aside>
      <aside class="right column"></aside>
    </section>
    <footer></footer>
  </div>

</template>

<style lang="scss" scoped>

$namespace: 'grail';

.title {
  @include mt(50);
}

@include b($namespace, float) {
  // $leftWidth: 200px;
  // 亲测 leftWidth 不能低于 100.
  // 好像是 leftWidth 不能低于 rightWidth
  $leftWidth: 90px;
  $rightWidth: 50px;
  min-width: calc(2 * $leftWidth + $rightWidth);
  
  header, footer {
    height: 60px
  }
  header {
    background: rgba(94, 92, 92, 0.726);
  }
  footer {
    clear: both;
    background: rgba(29, 27, 27, 0.726);
  }

  .column {
    float: left;
    height: 400px;
    position: relative;
  }

  .content {
    padding-left: $leftWidth;
    padding-right: $rightWidth;
    overflow: hidden;
  }
  .center {
    width: 100%;
    background-color: green;
  }

  .left {
    width: $leftWidth;
    right: $leftWidth;
    margin-left: -100%;
    background-color: #66f;
  }

  .right {
    width: $rightWidth;
    margin-right: -100%;
    // left: $rightWidth;
    background-color: rgb(230, 142, 142);
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
