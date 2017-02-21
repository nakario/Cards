<template>
  <div id="file">
    <card></card>
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
  components: {
    'card': Card,
  },
};
</script>

<style scoped>
</style>
