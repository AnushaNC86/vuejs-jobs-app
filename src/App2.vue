<script>
export default {
  data() {
    return {
      name: "John",
      status: "active",
      tasks: ["Task One ", "Task Two", "Task three"],
      link: "https://google.com",
    };
  },
  methods: {
    toggleButton() {
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
  },
};
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <!-- <a v-bind:href="link">Link for Google</a> -->
  <a :href="link">Link for Google</a>

  <!-- <button v-on:click="toggleButton">Change Status</button> -->
  <button @click="toggleButton">Change Status</button>
</template>
<script setup>
// ref tio make variables reactive
import { onMounted, ref } from "vue";
// export default {
//   setup() {
const name = ref("John");
const status = ref("active");
const tasks = ref(["Task One ", "Task Two", "Task three"]);
const newTask = ref("");

const toggleButton = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.log(error);
  }
});

// return { name, status, tasks, toggleButton };
//   },
// };
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task </label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>
  <h3>Tasks</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>

  <!-- <button v-on:click="toggleButton">Change Status</button> -->
  <button @click="toggleButton">Change Status</button>
</template>
