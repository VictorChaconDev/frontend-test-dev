
<template>
  <body class="h-screen p-6">
    <div class="grid grid-cols-3 h-full">
        <router-link to="/investigacio" as="div" class="bg-secta-light-green  m-7 flex justify-center items-center rounded-xl hover:bg-green-700 hover:text-white transition-all duration-300">
          <p class="text-xl ">INVESTIGACIÓ</p>
        </router-link>
        <router-link to="/top-secret" as="div" class="bg-secta-light-green m-7 rounded-xl flex justify-center items-center hover:bg-green-700 hover:text-white transition-all duration-300">
          <p class="text-xl">TOP SECRET</p>
        </router-link>
        <router-link to="/perfils" as="div" class="bg-secta-light-green m-7 rounded-xl flex justify-center items-center hover:bg-green-700 hover:text-white transition-all duration-300">
          <p class="text-xl">PERFILS</p>
        </router-link>
    </div>
</body>
</template>

<script setup lang="ts">
</script>
