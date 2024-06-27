<template>
  <div class="px-5 py-5">
    <div class="flex justify-between">
      <div class="flex items-center relative w-1/3">
        <button @click="toggleSearchBar">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-black" fill="none" viewBox="0 0 512 512">
            <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </button>
        <input v-if="isSearchBarVisible" @click.stop type="text" placeholder="Search..." class="py-2 px-4 absolute left-7 rounded-lg border-2 border-gray-500" />
      </div>
      <div class="w-1/3 flex justify-center">
        <img src="@assets/logo.png" alt="logo" class="h-12" />
      </div>
      <div class="flex w-1/3 justify-end items-center">
        <div class="flex gap-3">
          <router-link :to="{ name: 'Cart' }" v-if="$route.path.startsWith('/market')" class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="fill-primary w-8 h-8">
              <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              />
            </svg>
          </router-link>
          <router-link :to="{ name: 'Login' }" class="bg-primary hover:bg-white border-2 border-primary hover:text-primary text-white font-bold py-2 px-4 rounded">Login</router-link>
          <router-link :to="{ name: 'Signup' }" class="bg-white hover:text-white text-primary border-2 border-primary hover:bg-primary font-bold py-2 px-4 rounded">SignUp</router-link>
        </div>
      </div>
    </div>
    <nav class="p-5 flex flex-col text-gray-600 font-medium">
      <ul class="flex space-x-8 justify-center">
        <li><router-link :to="{ name: 'Beranda' }" :class="{ 'text-primary underline font-bold': $route.name.startsWith('Beranda') }">Beranda</router-link></li>
        <li><router-link :to="{ name: 'PlantCam' }" :class="{ 'text-primary underline font-bold': $route.name.startsWith('PlantCam') }">PlantCam</router-link></li>
        <li><router-link :to="{ name: 'Informasi' }" :class="{ 'text-primary underline font-bold': $route.name.startsWith('Informasi') }">Informasi</router-link></li>
        <li><router-link :to="{ name: 'Market' }" :class="{ 'text-primary underline font-bold': $route.name.startsWith('Market') }">Market</router-link></li>
        <li><router-link :to="{ name: 'Edukasi' }" :class="{ 'text-primary underline font-bold': $route.name.startsWith('Edukasi') }">Edukasi</router-link></li>
        <li><router-link :to="{ name: 'Tentang' }" :class="{ 'text-primary underline font-bold': $route.name.startsWith('Tentang') }">Tentang</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isSearchBarVisible = ref(false);

const toggleSearchBar = () => {
  isSearchBarVisible.value = !isSearchBarVisible.value;
};
</script>

<style scoped></style>
