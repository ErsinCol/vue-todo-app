<script setup>

</script>

<template>
  <li class="todo-list__item">
    <div class="todo-item__name">Item1</div>
    <button class="todo-item__delete-btn">Sil</button>
  </li>
</template>

<style scoped>
.todo-list__item {
  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 0.25rem;
  padding: 0.75rem 1.25rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.todo-item__name {
  color: #334155;
}

.todo-item__delete-btn {
  background-color: #ef4444;
  color: white;
  border: transparent;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.todo-item__delete-btn:hover {
  background-color: #dc2626;
}
</style>