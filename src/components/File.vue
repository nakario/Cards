<template>
  <div class="file">
    <div class="card-view">
      <card v-for="card in cards"></card>
      <div class="card-spacer"></div>
      <!-- Colored FAB button with ripple -->
      <button @click="newCard" class="add-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
        <i class="material-icons">add</i>
      </button>
    </div>
    <div class="detail-view">
      <p>hoge<p>
    </div>
  </div>
</template>

<script>
import Card from './Card';

export default {
  name: 'file',
  data: function() {
    return {
      cards: [],
    };
  },
  methods: {
    newCard: function() {
      this.cards.push({});
    },
  },
  components: {
    'card': Card,
  },
};
</script>

<style scoped>
  .file {
    width: 100vw;
    height: 100%;
    display: flex;
    position: absolute;
  }
  .card-view {
    width: 350px;
    background-color: lightgrey;
    overflow-y: scroll;
  }
  .card-view::-webkit-scrollbar {
    display: none;
  }
  .card-spacer {
    height: 100px;
  }
  .add-button {
    position: fixed;
    left: 10px;
    bottom: 10px;
    z-index: 1;
  }
  .detail-view {
    flex: 1;
    overflow: auto;
  }
</style>
