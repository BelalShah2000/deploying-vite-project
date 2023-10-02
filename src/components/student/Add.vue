<script setup>

import { RouterLink } from "vue-router";   
import { reactive } from "vue";
import useStudent from "../../composables/studentApi";
const {studentData,error,createStudent}=useStudent()

const FormData = reactive({
  stuname: "",
  email: "",
});   

const handleAddStudentForm = async () => {
  // console.log("Form Submited :", FormData);
  await createStudent(FormData)
};

</script>

<template>
  <div class="shadow-md pb-6">
    <div class="bg-indigo-600 p-4">
      <h1 class="text-3xl font-bold text-center text-white">Add Student</h1>
    </div>
  

  <form
    @submit.prevent="handleAddStudentForm"
    class="w-full"
    id="AddStudentForm"
  >
    <div class="flex item-center m-6">
      <div class="w-1/5">
        <label for="stuname" class="font-medium">Name : </label>
      </div>

      <div class="w-4/5">
        <input
          type="text"
          id="stuname"
          v-model.trim="FormData.stuname"
          class="border-2 border-gray-200 w-full py-2 px-4"
          placeholder="write your name"
          required
        />
      </div>
    </div>

    <div class="flex item-center m-6">
      <div class="w-1/5">
        <label for="email" class="font-medium">Email : </label>
      </div>

      <div class="w-4/5">
        <input
          type="email"
          id="email"
          v-model.trim="FormData.email"
          class="border-2 border-gray-200 w-full py-2 px-4"
          placeholder="write your email"
          required
        />
      </div>
    </div>

    <div class="m-8 flex justify-center">
      <button
        type="submit"
        class="bg-purple-700 text-white font-medium py-2 rounded-md px-6 hover:bg-purple-900 mr-6"
      >
        Add
      </button>

      <RouterLink :to="{name:'List'}">
        <button
        type="button"
        class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-900"
      >
        Back To Home
      </button>
      </RouterLink>
    </div>

    <div class=""></div>
  </form>
</div>
</template>
