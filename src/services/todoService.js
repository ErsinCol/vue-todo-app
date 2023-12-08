import axios from "axios";
const BASE_URL = "http://localhost:3000/todos";

async function fetchTodos(){
    try{
        const result = await axios.get(BASE_URL);
        return result.data.reverse();
    }catch(error){
        console.error("Error fetching todos: ", error.message);
        throw new Error('Failed to fetch todos. Please try again later.');
    }
}

async function addTodo(todo){
    try{
        const result = await axios.post(BASE_URL, todo);
        return result.data;
    }catch (error){
        console.error('Error adding todo: ', error.message);
        throw new Error('Failed to add todo. Please try again.');
    }
}

async function removeTodo(id){
    try{
        await axios.delete(`${BASE_URL}/${id}`);
    }catch (error){
        console.error('Error removing todo: ', error.message);
        throw new Error('Failed to remove todo. Please try again.');
    }
}

export default {
    fetchTodos,
    addTodo,
    removeTodo
}

