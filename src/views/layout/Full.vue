<script setup lang="ts">

</script>

<template>
  <!-- <p>全屏布局</p> -->
  <div class="fullscreen-layout-absolute">
    <header class="header"></header>
    <main></main>
    <footer></footer>
  </div>

  <div class="fullscreen-layout-flex">
    <header class="header"></header>
    <main></main>
    <footer></footer>
  </div>
  <!-- <h1>{{ msg }}</h1> -->

</template>

<style lang="scss">
.fullscreen-layout-absolute {
  position: relative;
  /* width: 400px; */
  width: 100%;
	height: 400px;
  /* background-color: red; */

  header,
  main,
  footer {
    position: absolute;
    left: 0;
    right: 0;
  }

  header {
    top: 0;
    height: 50px;
    background-color: red;
  }

  main {
    top: 50px;
    bottom: 50px;
    background-color: green;
  }

  footer {
    bottom: 0;
    height: 50px;
    background-color: blue;
  }
}

.fullscreen-layout-flex {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
	height: 400px;

  header {
    height: 50px;
    background-color: red;
  }

  main {
    flex-grow: 1;
    background-color: green;
  }

  footer {
    height: 50px;
    background-color: blue;
  }
}
</style>
