<template>
  <div class="file">
    <div class="card-view">
      <card v-for="card in cards" :fid="$route.params.id" :id="card.id"></card>
      <div class="card-spacer"></div>
      <!-- Colored FAB button with ripple -->
      <button @click="newCard({fid: $route.params.id})" class="add-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
        <i class="material-icons">add</i>
      </button>
    </div>
    <div class="detail-view">
      <div v-if="active > 0">
        <file-table :row="cards.find(c => c.id == active).table.row" :col="cards.find(c => c.id == active).table.col" :data="cards.find(c => c.id == active).table.data" :fid="$route.params.id" :cid="active"></file-table>
      </div>
      <div v-else></div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Card from './Card';
import Table from './Table';
import { NEW_CARD } from '../vuex/mutation-types';

export default {
  name: 'file',
  computed: {
    ...mapState({
      cards: function(state) {
        return state.files.find(f => f.id.toString() === this.$route.params.id.toString()).cards;
      },
      active: function(state) {
        return state.files.find(f => f.id.toString() === this.$route.params.id.toString()).active;
      },
    }),
  },
  methods: {
    ...mapMutations([
      NEW_CARD,
    ]),
  },
  components: {
    'card': Card,
    'file-table': Table,
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
