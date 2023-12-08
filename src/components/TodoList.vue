<script setup>
import TodoListItem from "./TodoListItem.vue";
import {useTodoStore} from "../stores/todoStore.js";
import {computed, onMounted} from "vue";
const todoStore = useTodoStore();

const todos = computed(()=>{
  return todoStore.todos
});

onMounted(async ()=>{
  await todoStore.fetchTodosAction();
})

</script>

<template>
  <ul class="todo-list">
    <TodoListItem v-for="todo in todos" :key="todo.name" :todo="todo"/>
  </ul>
</template>

<style scoped>
.todo-list {
  list-style-type: none;
  padding: 0 0.75rem;
  height: 30rem;
  overflow-y: auto;
}
</style>