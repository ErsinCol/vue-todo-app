<script setup>
</script>

<template>
  <div class="todo-app">
    <h3 class="todo-app__title">ToDo App</h3>
    <div class="todo-app__add-section">
      <input class="add-section__input-field" type="text" placeholder="Bir şeyler yazabilirsiniz...">
    </div>
    <div class="todo-app__list-section">
      <ul class="todo-list">
        <li class="todo-list__item">
          <div class="todo-item__name">Item1</div>
          <button class="todo-item__delete-btn">Sil</button>
        </li>
        <li class="todo-list__item">
          <div class="todo-item__name">Item2</div>
          <button class="todo-item__delete-btn">Sil</button>
        </li>
        <li class="todo-list__item">
          <div class="todo-item__name">Item3</div>
          <button class="todo-item__delete-btn">Sil</button>
        </li>
        <li class="todo-list__item">
          <div class="todo-item__name">Item4</div>
          <button class="todo-item__delete-btn">Sil</button>
        </li>
        <li class="todo-list__item">
          <div class="todo-item__name">Item5</div>
          <button class="todo-item__delete-btn">Sil</button>
        </li>
        <li class="todo-list__item">
          <div class="todo-item__name">Item6</div>
          <button class="todo-item__delete-btn">Sil</button>
        </li>
      </ul>
    </div>
    <small class="todo-app__result-bar">6 adet item vardır</small>
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

.todo-app__add-section {
  margin-bottom: 2rem;
}

.todo-app__list-section {
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

.todo-list {
  list-style-type: none;
  padding: 0;
}

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

.todo-app__result-bar {
  display: block;
  color: #06b6d4;
  font-weight: 600;
  text-align: right;
}
</style>
