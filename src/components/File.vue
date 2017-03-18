<template>
  <div class="file">
    <div class="card-view">
      <card v-for="card in cards" :fid="$route.params.id" :id="card.id" :type="card.type"></card>
      <div class="card-spacer"></div>
      <div class="buttons-container">
      <button @click="buttonsVisible = !buttonsVisible" class="buttons mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
        <i class="material-icons">add</i>
      </button>
      <transition name="add-button">
        <button v-if="buttonsVisible" @click="newCard({fid: $route.params.id, type: 'table'});hideButtons()" class="buttons mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
          <i class="material-icons">border_all</i>
        </button>
      </transition>
      <transition name="buttons">
        <button v-if="buttonsVisible" @click="newCard({fid: $route.params.id, type: 'text'});hideButtons()" class="buttons mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
          <i class="material-icons">subject</i>
        </button>
      </transition>
      </div>
    </div>
    <div class="detail-view">
      <div v-if="active > 0" class="overwrap">
        <file-table v-if="cards.find(c => c.id == active).type==='table'" :row="cards.find(c => c.id == active).table.row" :col="cards.find(c => c.id == active).table.col" :data="cards.find(c => c.id == active).table.data" :fid="$route.params.id" :cid="active"></file-table>
        <textarea v-if="cards.find(c => c.id == active).type==='text'" v-model="text" class="overwrap"></textarea>
      </div>
      <div v-else></div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Card from './Card';
import Table from './Table';
import { NEW_CARD, CHANGE_TEXT } from '../vuex/mutation-types';

export default {
  name: 'file',
  data: function() {
    return {
      buttonsVisible: false,
    };
  },
  computed: {
    ...mapState({
      cards: function(state) {
        return state.files.find(f => f.id.toString() === this.$route.params.id.toString()).cards;
      },
      active: function(state) {
        return state.files.find(f => f.id.toString() === this.$route.params.id.toString()).active;
      },
    }),
    text: {
      get() {
        const file =
          this.$store.state.files.find(f => f.id.toString() === this.$route.params.id.toString());
        const card = file.cards.find(c => c.id.toString() === this.active.toString());
        return card.text;
      },
      set(value) {
        const file =
          this.$store.state.files.find(f => f.id.toString() === this.$route.params.id.toString());
        const card = file.cards.find(c => c.id.toString() === this.active.toString());
        this.$store.commit(CHANGE_TEXT, { fid: file.id, cid: card.id, value });
      },
    },
  },
  methods: {
    ...mapMutations([
      NEW_CARD,
    ]),
    showButtons: function() {
      this.buttonsVisible = true;
    },
    hideButtons: function() {
      this.buttonsVisible = false;
    },
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
  .buttons-container {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-flow: column-reverse nowrap;
  }
  .buttons {
    margin: 10px;
  }
  .detail-view {
    flex: 1;
    overflow: auto;
  }
  .buttons-enter-active, .buttons-leave-active {
    transition: all .3s
  }
  .buttons-enter, .buttons-leave-to {
    transform: translateY(10px);
    opacity: 0
  }
  .overwrap {
    width: 100%;
    height: 100%;
  }
  .overwrap::-webkit-scrollbar {
    display: none;
  }
</style>
