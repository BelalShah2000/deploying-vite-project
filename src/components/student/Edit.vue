<script setup>
import { onMounted } from 'vue';
import {RouterLink, useRoute} from 'vue-router'
import useStudent from '../../composables/studentApi';

const {studentData,error,getSingleStudent,updateStudent}=useStudent();

const {params}=useRoute()
onMounted(()=>{
  getSingleStudent(params.id)
})



function handleUpdateStudentForm(){
  // console.log("Updated hai");
  updateStudent(params.id,studentData.value)

}


</script>

<template>
  <div class="shadow-md pb-6">
   <div class="bg-indigo-600 p-4">
    <h1 class="text-3xl font-bold text-center text-white">Edit Student</h1>
   </div>  
   <form @submit.prevent="handleUpdateStudentForm" class="w-full">
   <div class="flex item items-center m-6">
    <div class="w-1/5">
      <label class="font-medium" for="stuid">ID :</label>
    </div>
    <div class="w-4/5">
      <input
      type="text"
      id="stuid"
      class="border-2 border-grey-200 w-full py-2 px-4"
      readonly
      disabled
      v-model.trim="studentData.id"
      />
    </div>
   </div>


   <div class="flex item items-center m-6">
    <div class="w-1/5">
      <label class="font-medium" for="stuname">NAME :</label>
    </div>
    <div class="w-4/5">
      <input
      type="text"
      id="stuname"
      class="border-2 border-grey-200 w-full py-2 px-4"
      required
      v-model.trim="studentData.stuname"

      />
    </div>
   </div>


   <div class="flex item items-center m-6">
    <div class="w-1/5">
      <label class="font-medium" for="email">EMAIL :</label>
    </div>
    <div class="w-4/5">
      <input
      type="email"
      id="email"
      class="border-2 border-grey-200 w-full py-2 px-4"
      required
      v-model.trim="studentData.email"

      />
    </div>
   </div>




   <div class="m-8 flex justify-center ">
    <button
    type="submit"
    class="bg-emerald-700 text-white font-medium py-2 px-4 rounded-md hover:bg-emerald-900 mr-5">
    Save
    </button>


    <RouterLink :to="{name:'List'}">
      <button
    type="button"
    class="bg-emerald-700 text-white font-medium py-2 px-4 rounded-md hover:bg-emerald-900">
    Back To Home
    </button>
    </RouterLink>

      
    


   </div>







  </form>
   


  </div>
  

 
</template>