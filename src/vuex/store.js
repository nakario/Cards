import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    files: [],
  },
  mutations: {
    [types.NEW_FILE] (state) {
      const id = state.files.length + 1;
      state.files.push({
        id,
        name: `File ${id}`,
        cards: [],
      });
    },
    [types.NEW_CARD] (state, { fid }) {
      const cards = state.files.find(f => f.id.toString() === fid.toString()).cards;
      const id = cards.length + 1;
      cards.push({
        id,
        table: {
          row: 0,
          col: 0,
          data: [[{}]],
        },
      });
    },
    [types.CHANGE_ROW] (state, { fid, cid, value }) {
      const file = state.files.find(f => f.id.toString() === fid.toString());
      const card = file.cards.find(c => c.id.toString() === cid.toString());
      for (let i = card.table.row; i < value; i += 1) {
        const arr = [...Array(card.table.col + 1)].map(() => ({}));
        card.table.data.push(arr);
      }
      card.table.row = value;
    },
    [types.CHANGE_COL] (state, { fid, cid, value }) {
      const file = state.files.find(f => f.id.toString() === fid.toString());
      const card = file.cards.find(c => c.id.toString() === cid.toString());
      for (const arr of card.table.data) {
        for (let i = card.table.col; i < value; i += 1) {
          arr.push({});
        }
      }
      card.table.col = value;
    },
    [types.CHANGE_CELL] (state, { fid, cid, row, col, value }) {
      const file = state.files.find(f => f.id.toString() === fid.toString());
      const card = file.cards.find(c => c.id.toString() === cid.toString());
      card.table.data[row][col].value = value;
    },
  },
});
