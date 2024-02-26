<script setup>
import { ref, onMounted } from "vue";
import Card from "./card.vue";
import ToDoInput from "./ToDoInput.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const newTodo = ref("");
const defaultData = [
  {
    done: false,
    content: "Write a blog post",
  },
];
const todosData = JSON.parse(localStorage.getItem("todos")) || defaultData;
const todos = ref(todosData);

const addTodo = (newTodoChild) => {
  newTodo.value = newTodoChild;
  if (newTodo.value) {
    todos.value.push({
      done: false,
      content: newTodo.value,
    });
    newTodo.value = "";
    saveData();
    toast("Item Added Successfully", {
      theme: "colored",
      type: "success",
      dangerouslyHTMLString: true,
    });
  }
};

const removeTodo = (index) => {
  const removedTodo = todos.value[index];
  todos.value.splice(index, 1);
  saveData();

  toast("Deleting the Item from the List", {
    theme: "auto",
    type: "error",
    dangerouslyHTMLString: true,
  });
};

const saveData = () => {
  const storageData = JSON.stringify(todos.value);
  localStorage.setItem("todos", storageData);
};

onMounted(() => {
  $(".message .close").on("click", function () {
    $(this).closest(".message").transition("fade");
  });
});
</script>

<template>
  <div>
    <h1>ToDo App</h1>
    <ToDoInput @addTodo="addTodo" />
    <h4>To do List</h4>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <card :item="todo" @remove="removeTodo(index)" />
      </li>
    </ul>
    <div v-if="todos.length === 0">
      <p>Empty List</p>
    </div>
  </div>
</template>
