<script setup>
import TodoListItem from "./TodoListItem.vue";
</script>

<template>
  <ul class="todo-list">
    <TodoListItem />
  </ul>
</template>

<style scoped>
.todo-list {
  list-style-type: none;
  padding: 0;
}
</style>