<script setup>
import TodoList from "./TodoList.vue";
import ResultBar from "./ResultBar.vue";
</script>

<template>
  <section class="todo-app__list-section">
      <TodoList />
      <ResultBar />
  </section>
</template>

<style scoped>
.todo-app__list-section {
  margin-bottom: 2rem;
}
</style>