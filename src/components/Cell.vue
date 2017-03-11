<template>
  <th v-if="header">
    <slot></slot>
  </th>
  <td v-else>
    <slot></slot>
  </td>
</template>

<script>
  export default {
    props: {
      header: {
        type: Boolean,
        requiered: true,
      },
    },
  };
</script>
