import {defineStore} from "pinia";
import {computed, ref} from "vue";
import todoService from "../services/todoService.js";

export const useTodoStore = defineStore("todo", ()=>{
    const todos = ref([]);

    const getTodoCount = computed(() => todos.value.length);

    async function fetchTodosAction(){
        try{
            todos.value = await todoService.fetchTodos();
        }catch (error){
            console.error('Error in fetchTodosAction: ', error.message);
        }
    }

    async function addTodoAction(todo){
        try{
            const addedTodo = await todoService.addTodo(todo)
            todos.value.unshift(addedTodo);
        }catch(error){
            console.error('Error in addTodoAction: ', error.message);
        }

    }

    async function removeTodoAction(id){
        try{
            await todoService.removeTodo(id)
            todos.value = todos.value.filter((todo) => todo.id !== id);
        }catch (error){
            console.error('Error in removeTodoAction: ', error.message);
        }
    }

    return {
        todos,
        getTodoCount,
        fetchTodosAction,
        addTodoAction,
        removeTodoAction,
    }
})