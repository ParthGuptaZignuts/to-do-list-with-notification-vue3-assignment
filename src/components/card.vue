<template>
  <div class="cards-container">
    <div>
      <span :class="{ done: item.done }" @click="doneTodo">{{ item.content }}</span>
    </div>
    <div>
      <button @click="removeTodo">Remove</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['item']);
const emits = defineEmits(['remove']);


const removeTodo = () => {
  emits('remove');
};
</script>

