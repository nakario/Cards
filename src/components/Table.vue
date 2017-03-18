<template>
  <div class="table-wrapper">
    <table>
      <tr v-for="row in rows">
        <cell v-for="col in cols" :header="row===0||col===0" :class="{'top-left': row===0&&col===0, 'outer-cell': true}">
          <div v-if="td[row][col].value === '' || td[row][col].value == null" class="inner-cell" @blur="onBlur(row, col, $event)" :contenteditable="row!=0||col!=0" :placeholder="row_col(row,col)"></div>
          <div v-else class="inner-cell" @blur="onBlur(row, col, $event)" :contenteditable="row!=0||col!=0">
            {{ td[row][col].value }}
          </div>
        </cell>
      </tr>
    </table>
  </div>
</template>

<script>
  import Cell from './Cell';
  import { CHANGE_CELL } from '../vuex/mutation-types';

  export default {
    components: {
      'cell': Cell,
    },
    props: {
      row: {
        type: Number,
        required: true,
      },
      col: {
        type: Number,
        required: true,
      },
      data: {
        required: true,
      },
      fid: {
        required: true,
      },
      cid: {
        required: true,
      },
    },
    computed: {
      rows: function() {
        return [...Array(this.row + 1).keys()];
      },
      cols: function() {
        return [...Array(this.col + 1).keys()];
      },
      td: function() {
        const rows = [];
        for (const i of this.rows) {
          const cols = [];
          for (const j of this.cols) {
            if (i <= this.row && j <= this.col) {
              cols.push({ value: this.data[i][j].value, type: 'String' });
            } else {
              cols.push({ value: undefined, type: undefined });
            }
          }
          rows.push(cols);
        }
        return rows;
      },
    },
    methods: {
      log: function(msg) {
        console.log(msg);
      },
      row_col: function(row, col) {
        if (row === 0) {
          return col;
        }
        if (col === 0) {
          return row;
        }
        return '';
      },
      onBlur: function(row, col, event) {
        this.$store.commit(CHANGE_CELL, { fid: 1, cid: 1, row, col, value: event.target.innerText });
      },
    },
  };
</script>

<style scoped>
  .tabel-wrapper {
    overflow: hidden;
  }
  table {
    border-collapse: collapse;
  }
  th,
  td {
    width: 100px;
    overflow: hidden;
    border: 2px black solid;
  }
  th {
    background-color: lightgrey;
  }
  th.top-left {
    background-image: linear-gradient(to top right,
                        transparent, transparent 47%,
                        transparent 47%, black 49%,
                        black 49%, black 51%,
                        black 51%, transparent 53%,
                        transparent 53%, transparent);
  }
  .inner-cell {
    width: 100px;
    height: 1.5em;
    white-space: nowrap;
  }
  .inner-cell:focus {
    outline: none;
  }
  [contenteditable=true]:empty:before {
    content: attr(placeholder);
    display: block; /* For Firefox */
    color: grey;
    font-weight: normal;
  }
</style>
