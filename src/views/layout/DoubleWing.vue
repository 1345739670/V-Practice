<script setup lang="ts">

</script>

<template>
  <p class="title">float + margin-left/right</p>
  <div class="grail-float">
    <header></header>
    <section class="content column">
      <main class="center">Main</main>
    </section>
    <aside class="left column">left</aside>
    <aside class="right column">right</aside>
    <footer></footer>
  </div>

  <p class="title">另外一个结构 float + margin-left/right</p>
  <div class="grail2-float">
    <header></header>
    <section class="content column">
      <main class="center"></main>
    </section>
    <aside class="left column"></aside>
    <aside class="right column"></aside>
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
  $leftWidth: 100px;
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
    // position: relative;
  }

  .content {
    width: 100%;
    // padding-left: $leftWidth;
    // padding-right: $rightWidth;
    overflow: hidden;
    background-color: green;
  }
  .center {
    // width: 100%;
    margin-left: $leftWidth;
    margin-right: $rightWidth;
    
  }

  .left {
    width: $leftWidth;
    margin-left: -100%;
    background-color: #66f;
  }

  .right {
    width: $rightWidth;
    // todo 改动动态计算变量
    // $negative-rightWidth: -$rightWidth;
    margin-left: -$rightWidth;
    // left: $rightWidth;
    background-color: rgb(230, 142, 142);
  }
}

@include b($namespace, float2) {
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
    // position: relative;
  }

  .content {
    width: 100%;
    // padding-left: $leftWidth;
    // padding-right: $rightWidth;
    overflow: hidden;
    background-color: green;
  }
  .center {
    // width: 100%;
    margin-left: $leftWidth;
    margin-right: $rightWidth;
    
  }

  .left {
    width: $leftWidth;
    margin-left: -100%;
    background-color: #66f;
  }

  .right {
    width: $rightWidth;
    // todo 改动动态计算变量
    // $negative-rightWidth: -$rightWidth;
    margin-left: -$rightWidth;
    // left: $rightWidth;
    background-color: rgb(230, 142, 142);
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
