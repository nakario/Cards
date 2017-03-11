<template>
  <div class="card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--border">
      Title
    </div>
    <div class="main mdl-card--border">
      <main-table></main-table>
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <a class="mdl-button mdl-js-button">
        action
      </a>
  </div>
</template>

<script>
import Table from './Table';

export default {
  name: 'card',
  components: {
    'main-table': Table,
  },
};
</script>

<style scoped>
  .card {
    margin: 10px;
  }
  .main {
    width: 100%;
    height: 100px;
    overflow: scroll;
  }
  .main::-webkit-scrollbar {
    display: none;
  }
</style>
