<template>
  <table>
    <thead>
      <th></th>
      <td>(1)</td>
      <td>(2)</td>
      <td>(3)</td>
    </thead>
    <tbody>
      <tr>
        <th>(1)</th>
        <td>
          <div class="placeholder" contenteditable="true"></div>
        </td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>(2)</th>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>(3)</th>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
</script>

<style scoped>
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
