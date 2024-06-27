<template>
  <div>
    <Navbar />
    <div class="flex flex-col px-16 py-20 items-center">
      <form class="flex flex-col gap-2">
        <div class="flex justify-start">
          <h2 class="text-3xl">Masuk Akun</h2>
        </div>
        <div class="flex">
          <label for="name" class="w-[200px]">Email</label>
          <input type="email" class="border-[1px] border-gray-500 w-[300px] p-1" />
        </div>
        <div class="flex">
          <label for="name" class="w-[200px]">Password</label>
          <input type="password" class="border-[1px] border-gray-500 w-[300px] p-1" />
        </div>
        <div>
          <button class="bg-primary w-[500px] py-2 text-white rounded">Masuk</button>
          <p class="italic text-blue-500 underline text-sm">Lupa Password?</p>
        </div>
        <div>
          <button @click="registerWithGoogle" class="flex justify-center gap-3 items-center bg-white w-[500px] py-2 text-black rounded border-[1px] border-black">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" class="w-5 h-5">
              <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              /></svg
            >Daftar dengan Google
          </button>     
          <p class="text-sm">Belum Sudah Punya Akun? <router-link :to="{ name: 'Signup' }" class="italic text-blue-500 underline">Masuk Sekarang</router-link></p>
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@components/Navbar.vue";
import Footer from "@components/Footer.vue";
</script>

<style></style>
