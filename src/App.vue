<script setup>
import ListSection from "./components/ListSection.vue";
import AddSection from "./components/AddSection.vue";
import LanguagePicker from "./components/LanguagePicker.vue";
</script>

<template>
  <div class="todo-app">
    <main>
      <h3 class="todo-app__title">ToDo App</h3>
      <AddSection />
      <ListSection />
    </main>
    <footer>
      <LanguagePicker />
    </footer>
  </div>

</template>

<style scoped>
.todo-app {
  margin: 3rem 0;
  width: min(40rem, 100%);
}

main {
  background-color: white;
  padding: 1rem 2rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
}

footer {
  padding: 1rem;
}

.todo-app__title {
  text-align: center;
}
</style>
