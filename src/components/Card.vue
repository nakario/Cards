<template>
  <div class="card mdl-card mdl-shadow--2dp">
    <div class="title mdl-card__title" contenteditable="true" placeholder="Title">
    </div>
    <div class="supporting-text mdl-card__supporting-text mdl-card--border" contenteditable="true" placeholder="description">
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
  .title {
    padding-bottom: 0;
    text-align: left;
    word-wrap: break-word;
    white-space: normal;
    display: block;
  }
  .title:focus {
    outline: none;
  }
  .supporting-text {
    text-align: left;
    padding-top: 0;
    padding-bottom: 0;
  }
  .supporting-text:focus {
    outline: none;
  }
  [contenteditable=true]:empty:before {
    content: attr(placeholder);
    display: block; /* For Firefox */
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
