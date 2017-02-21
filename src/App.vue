<template>
  <div id="app">
    <!-- Simple header with scrollable tabs. -->
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">

      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <span class="mdl-layout-title">Title</span>
        </div>
        <!-- Tabs -->
        <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
          <router-link to="/" class="mdl-layout__tab is-active">Tab 1</router-link>
        </div>
      </header>

      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Menu</span>
        <div class="mdl-navigation">
          <router-link to="/" class="mdl-navigation__link">Some Action</router-link>
        </div>
      </div>

      <main class="mdl-layout__content">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
