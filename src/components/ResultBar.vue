<script setup>
import {useTodoStore} from "../stores/todoStore.js";
const todoStore = useTodoStore();
</script>

<template>
  <small class="todo-app__result-bar">{{todoStore.getTodoCount}} {{ $t('resultBar')}}</small>
</template>

<style scoped>
.todo-app__result-bar {
  display: block;
  color: #0ea5e9;
  font-weight: 600;
  text-align: right;
}
</style>