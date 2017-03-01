<template>
  <div id="app">
    <!-- Simple header with scrollable tabs. -->
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">

      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <span class="mdl-layout-title">Cards</span>
        </div>
        <!-- Tabs -->
        <div class="mdl-layout__tab-bar">
          <button v-for="file in files" @click="clickFile(file.id)" class="mdl-layout__tab mdl-button mdl-js-button mdl-js-ripple-effect">{{ file.name }}</button>
          <button @click="newFile" class="mdl-layout__tab mdl-button mdl-js-button mdl-js-ripple-effect">＋</button>
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
import router from './router';

export default {
  name: 'app',
  data: function() {
    return {
      files: [],
    };
  },
  methods: {
    clickFile: function(id) {
      router.push(`/files/${id}`);
    },
    newFile: function() {
      const id = this.files.length + 1;
      this.files.push({
        id,
        name: `File ${id}`,
      });
    },
  },
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
