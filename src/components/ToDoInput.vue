<script setup>
import {ref , defineEmits} from "vue" ;
const newTodoChild = ref("");
const emits = defineEmits(['addTodo'])
const addTodo = () => {
    emits('addTodo' , newTodoChild.value) ;
    newTodoChild.value = '' ;
}
</script>

<template>
<form @submit.prevent="addTodo">
    <label>New ToDo </label>
     <input v-model="newTodoChild" name="newTodo" autocomplete="off" maxlength="60" size="4"/>
    <button>Add ToDo</button>
</form>
</template>
