<script setup>
</script>

<template>
  <div class="todo-app">
    <div class="todo-app__title">Todo App</div>
    <div class="todo-app__add-section">
      <input type="text" placeholder="Bir şeyler yazabilirsiniz...">
    </div>
    <div class="todo-app__list-section">
      <ul>
        <li class="todo-item">
          <div class="todo-item__name">Item1</div>
          <button class="todo-item__delete-btn">Sil</button>
        </li>
        <li class="todo-item">
          <div class="todo-item__name">Item2</div>
          <button class="todo-item__delete-btn">Sil</button>
        </li>
        <li class="todo-item">
          <div class="todo-item__name">Item3</div>
          <button class="todo-item__delete-btn">Sil</button>
        </li>
        <li class="todo-item">
          <div class="todo-item__name">Item4</div>
          <button class="todo-item__delete-btn">Sil</button>
        </li>
        <li class="todo-item">
          <div class="todo-item__name">Item5</div>
          <button class="todo-item__delete-btn">Sil</button>
        </li>
        <li class="todo-item">
          <div class="todo-item__name">Item6</div>
          <button class="todo-item__delete-btn">Sil</button>
        </li>
      </ul>
    </div>
    <div class="todo-app__result-bar">6 adet item vardır</div>
  </div>
</template>

<style scoped>
</style>
