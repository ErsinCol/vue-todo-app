<script setup>
import ListSection from "./components/ListSection.vue";
import AddSection from "./components/AddSection.vue";
</script>

<template>
  <div class="todo-app">
    <h3 class="todo-app__title">ToDo App</h3>
    <AddSection />
    <ListSection />
  </div>
</template>

<style scoped>
.todo-app {
  padding: 1rem 2rem;
  margin: 3rem 0;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  width: min(40rem, 100%);
  background-color: white;
}

.todo-app__title {
  text-align: center;
}
</style>
