<template>
  <div class="table-wrapper">
    <table>
      <tr v-for="row in rows">
        <cell v-for="col in cols" :header="row===0||col===0" :class="{'top-left': row===0&&col===0}">
          <div class="placeholder" @blur="log(`${row}, ${col}`)" :contenteditable="row!==0||col!==0">
            {{ td[row][col].type == undefined ? 'x' : td[row][col].data }}
          </div>
        </cell>
      </tr>
    </table>
  </div>
</template>

<script>
  import Cell from './Cell';

  const MAX_ROW = 4;
  const MAX_COL = 4;

  function hoge() {
    return [[{ data: '', type: 'String' }, { data: 'header', type: 'String' }, { data: 'aaaaaaaaaaaaaaaaaaaaaaa', type: 'String' }], [{ data: 'a', type: 'String' }, { data: 'a', type: 'String' }, { data: 'a', type: 'String' }], [{ data: 'a', type: 'String' }, { data: 'a', type: 'String' }, { data: 'a', type: 'String' }], [{ data: 'a', type: 'String' }, { data: 'a', type: 'String' }, { data: 'a', type: 'String' }]];
  }

  export default {
    props: {
      row: {
        default: 2,
      },
      col: {
        default: 2,
      },
      table: {
        default: hoge,
      },
    },
    components: {
      'cell': Cell,
    },
    computed: {
      rows: function() {
        return [...Array(MAX_ROW + 1).keys()];
      },
      cols: function() {
        return [...Array(MAX_COL + 1).keys()];
      },
      td: function() {
        const rows = [];
        for (const i of this.rows) {
          const cols = [];
          for (const j of this.cols) {
            if (i <= this.row && j <= this.col) {
              cols.push({ data: this.table[i][j].data, type: 'String' });
            } else {
              cols.push({ data: undefined, type: undefined });
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
  th.top-left {
    background-image: linear-gradient(to top right,
                        transparent, transparent 47%,
                        transparent 47%, black 49%,
                        black 49%, black 51%,
                        black 51%, transparent 53%,
                        transparent 53%, transparent);
  }
  .placeholder {
    widows: 100px;
  }
  .placeholder:focus {
    outline: none;
  }
</style>
