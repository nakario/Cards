<template>
  <div class="card mdl-card mdl-shadow--2dp">
    <div class="title mdl-card__title" contenteditable="true" placeholder="Title">
    </div>
    <div class="supporting-text mdl-card__supporting-text mdl-card--border" contenteditable="true" placeholder="description">
    </div>
    <div class="main mdl-card--border">
      <card-table :row="row" :col="col" :data="table.data" :fid="fid" :cid="id"></card-table>
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <input v-model="row" type="number" class="input-row">
      <input v-model="col" type="number" class="input-col">
      <a class="mdl-button mdl-js-button" @click="log(table)">
        action
      </a>
      <a class="settings-button mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">settings</i>
      </a>
  </div>
</template>

<script>
import Table from './Table';
import { CHANGE_ROW, CHANGE_COL } from '../vuex/mutation-types';

export default {
  name: 'card',
  components: {
    'card-table': Table,
  },
  methods: {
    log: function(msg) {
      console.log(msg);
    },
  },
  props: {
    fid: {
      requierd: true,
    },
    id: {
      requierd: true,
    },
  },
  computed: {
    table: function() {
      const file = this.$store.state.files.find(f => f.id.toString() === this.fid.toString());
      const card = file.cards.find(c => c.id.toString() === this.id.toString());
      return card.table;
    },
    row: {
      get() {
        const file = this.$store.state.files.find(f => f.id.toString() === this.fid.toString());
        const card = file.cards.find(c => c.id.toString() === this.id.toString());
        return card.table.row;
      },
      set(value) {
        const file = this.$store.state.files.find(f => f.id.toString() === this.fid.toString());
        const card = file.cards.find(c => c.id.toString() === this.id.toString());
        this.$store.commit(CHANGE_ROW, { fid: file.id, cid: card.id, value: Number(value) });
      },
    },
    col: {
      get() {
        const file = this.$store.state.files.find(f => f.id.toString() === this.fid.toString());
        const card = file.cards.find(c => c.id.toString() === this.id.toString());
        return card.table.col;
      },
      set(value) {
        const file = this.$store.state.files.find(f => f.id.toString() === this.fid.toString());
        const card = file.cards.find(c => c.id.toString() === this.id.toString());
        this.$store.commit(CHANGE_COL, { fid: file.id, cid: card.id, value: Number(value) });
      },
    },
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
  .settings-button {
    float: right;
  }
  .input-row {
    width: 50px;
  }
  .input-col {
    width: 50px;
  }
</style>
