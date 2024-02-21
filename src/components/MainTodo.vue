<script setup>
import { ref, onMounted } from "vue";
import Card from "./card.vue";
import ToDoAppHeading from "./ToDoAppHeading.vue";
import ToDoListHeading from "./ToDoListHeading.vue" ;
import ToDoInput from "./ToDoInput.vue";

const newTodo = ref('') ;
const showCreateMessage = ref(false);
const showDeleteMessage = ref(false);
const defaultData = [
  {
    done: false,
    content: "Write a blog post",
  },
];
const todosData = JSON.parse(localStorage.getItem("todos")) || defaultData;
const todos = ref(todosData);

const addTodo = (newTodoChild) => {
  newTodo.value = newTodoChild ;
  if (newTodo.value) {
    todos.value.push({
      done: false,
      content: newTodo.value,
    });
    newTodo.value = "";

    saveData();
    showCreateMessage.value = true;
  }
}

const removeTodo = (index) => {
  const removedTodo = todos.value[index];
  todos.value.splice(index, 1);
  saveData();
  showDeleteMessage.value = true;
}

const saveData = () => {
  const storageData = JSON.stringify(todos.value);
  localStorage.setItem("todos", storageData);
}

const hideCreateMessage = () => {
  showCreateMessage.value = false;
}

const hideDeleteMessage = () => {
  showDeleteMessage.value = false;
}

onMounted(() => {
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade')
  });
});
</script>

<template>
  <div>
    <ToDoAppHeading/>
    <ToDoInput @addTodo="addTodo"/>
    <ToDoListHeading />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <card :item="todo" @remove="removeTodo(index)"/>
      </li>
    </ul>
    <h4 v-if="todos.length === 0">Empty list.</h4>  
    <!-- showing create message  -->
    <div v-show="showCreateMessage" class="ui positive message">
      <i class="close icon" @click="hideCreateMessage"></i>
      <div class="header">
        The New Task Added
      </div>
    </div>
    <!-- showing deleted message -->
    <div v-show="showDeleteMessage" class="ui negative message">
      <i class="close icon" @click="hideDeleteMessage"></i>
      <div class="header">
        The Task is Deleted
      </div>
    </div>
  </div>

</template>




