<template>
  <div id="app">
    <!-- Simple header with scrollable tabs. -->
    <div class="flex-container mdl-layout mdl-js-layout mdl-layout--fixed-header">

      <header class="flex-header mdl-layout__header">
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

      <main class="flex-main mdl-layout__content">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import router from './router';
import { NEW_FILE } from './vuex/mutation-types';

export default {
  name: 'app',
  methods: {
    ...mapMutations([
      NEW_FILE,
    ]),
    clickFile: function(id) {
      router.push(`/files/${id}`);
    },
  },
  computed: {
    ...mapState([
      'files',
    ]),
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
.flex-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.flex-main {
  flex: 1;
}
</style>
