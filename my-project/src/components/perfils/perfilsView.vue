<template>
    <body class="h-screen p-6">
    <div class="grid grid-cols-2 h-full">
        <router-link to="/liders" as="div" class="bg-secta-light-green  m-7 flex justify-center items-center rounded-xl hover:bg-green-700 hover:text-white transition-all duration-300">
          <p class="text-xl ">LÍDERS</p>
        </router-link>
        <router-link to="/reclutants" as="div" class="bg-secta-light-green m-7 rounded-xl flex justify-center items-center hover:bg-green-700 hover:text-white transition-all duration-300">
          <p class="text-xl">RECLUTANTS</p>
        </router-link>
    </div>

</body>
</template>

<script setup lang="ts">

</script>
