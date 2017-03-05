<template>
  <div>
    <card v-for="card in cards"></card>
    <!-- Colored FAB button with ripple -->
    <button @click="newCard" class="add-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
      <i class="material-icons">add</i>
    </button>
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
  methods: {
    newCard: function() {
      this.cards.push({});
    },
  },
  components: {
    'card': Card,
  },
};
</script>

<style scoped>
.add-button {
  position: fixed;
  right: 10px;
  bottom: 10px;
}
</style>
