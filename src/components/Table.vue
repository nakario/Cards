<template>
  <div class="table-wrapper">
    <table>
      <tr v-for="row in rows">
        <td v-for="col in cols">
          <div class="placeholder" @blur="log(`${row}, ${col}`)" contenteditable="true">
            {{ td[row][col].type == undefined ? 'x' : td[row][col].data }}
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  const MAX_ROW = 5;
  const MAX_COL = 10;

  function hoge() {
    return [[{ data: 'a', type: 'String' }, { data: 'a', type: 'String' }, { data: 'a', type: 'String' }], [{ data: 'a', type: 'String' }, { data: 'a', type: 'String' }, { data: 'a', type: 'String' }], [{ data: 'a', type: 'String' }, { data: 'a', type: 'String' }, { data: 'a', type: 'String' }], [{ data: 'a', type: 'String' }, { data: 'a', type: 'String' }, { data: 'a', type: 'String' }]];
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
    height: 24px;
    overflow: hidden;
    border: 2px black solid;
  }
  .placeholder {
    widows: 100px;
    height: 24px;
  }
  .placeholder:focus {
    outline: none;
  }
</style>
