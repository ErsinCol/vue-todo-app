<script setup>

</script>

<template>
  <section class="todo-app__add-section">
    <input class="add-section__input-field" type="text" placeholder="Bir şeyler yazabilirsiniz...">
  </section>
</template>

<style scoped>
.todo-app__add-section {
  margin-bottom: 2rem;
}

.add-section__input-field {
  width: 100%;
  border: 1px solid #ddd;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  padding: 0.75rem 1.25rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  color: #334155;
}

.add-section__input-field:focus {
  border: 1px solid #0077bf;
  outline: none;
  box-shadow: 0 0 0.25rem rgba(0, 123, 255, 0.5);
}
</style>