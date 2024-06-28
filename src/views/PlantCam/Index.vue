<template>
  <div>
    <Navbar />
    <div class="flex items-center gap-5 justify-center py-40">
      <div class="p-5 border-2 border-black flex flex-col rounded-lg text-center justify-center items-center gap-5 w-[250px] h-[200px]">
        <div class="w-10 h-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
            />
          </svg>
        </div>
        <label class="px-4 py-2 bg-primary text-white rounded-lg cursor-pointer">
          Upload Gambar
          <input type="file" class="hidden" />
        </label>
      </div>
      <div>
        <p class="text-lg font-semibold">atau drop file disini</p>
      </div>
    </div>
    <div class="bg-primary px-16">
      <h2 class="text-center font-semibold text-2xl py-10 text-white">Explore</h2>
      <div class="flex gap-3 flex-wrap justify-center">
        <CardExplore :title="'Cabai Rawit'" :subtitle="'Capsicum frutescens'" :url="'./produk/cabai-rawit.png'" />
        <CardExplore :title="'Bawang Merah'" :subtitle="'Capsicum frutescens'" :url="'./produk/bawang-merah.png'" />
        <CardExplore :title="'Bayam'" :subtitle="'Capsicum frutescens'" :url="'./produk/bayam.png'" />
        <CardExplore :title="'Bit Merah'" :subtitle="'Capsicum frutescens'" :url="'./produk/bit-merah.png'" />
        <CardExplore :title="'Caisim'" :subtitle="'Capsicum frutescens'" :url="'./produk/caisim.png'" />
        <CardExplore :title="'Jagung Manis'" :subtitle="'Capsicum frutescens'" :url="'./produk/jagung-manis.png'" />
        <CardExplore :title="'Mentimun'" :subtitle="'Capsicum frutescens'" :url="'./produk/mentimun.png'" />
        <CardExplore :title="'Terong'" :subtitle="'Capsicum frutescens'" :url="'./produk/terong.png'" />
        <CardExplore :title="'Paprika'" :subtitle="'Capsicum frutescens'" :url="'./produk/paprika.png'" />
        <CardExplore :title="'Tomat'" :subtitle="'Capsicum frutescens'" :url="'./produk/tomat.png'" />
      </div>
      <div class="flex justify-center pt-10">
        <button class="bg-white rounded-full py-2 px-6">See More</button>
      </div>
    </div>
    
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@components/Navbar.vue";
import Footer from "@components/Footer.vue";
import CardExplore from "@components/CardExplore.vue";
</script>

<style></style>
