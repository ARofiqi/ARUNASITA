<template>
  <div class="">
    <Navbar />
    <div class="px-16 py-10 flex gap-5">
      <button class="bg-primary px-4 py-2 rounded text-white hover:opacity-80">Tanaman</button>
      <button class="bg-primary px-4 py-2 rounded text-white hover:opacity-80">Sayuran</button>
      <button class="bg-primary px-4 py-2 rounded text-white hover:opacity-80">Buah-buahan</button>
      <button class="bg-primary px-4 py-2 rounded text-white hover:opacity-80">Bibit</button>
    </div>
    <div class="grid grid-cols-3 px-16 py-10 gap-3">
      <CardProduk :url="'./produk/caisim.png'" :title="'Caisim'" :price="20000" />
      <CardProduk :url="'./produk/bawang-merah.png'" :title="'Bawang Merang'" :price="20000" />
      <CardProduk :url="'./produk/bayam.png'" :title="'Bayam'" :price="20000" />
      <CardProduk :url="'./produk/terong.png'" :title="'Terong'" :price="20000" />
      <CardProduk :url="'./produk/jagung-manis.png'" :title="'Jagung Manis'" :price="20000" />
      <CardProduk :url="'./produk/cabai-rawit.png'" :title="'Cabai Rawit'" :price="20000" />
      <CardProduk :url="'./produk/bit-merah.png'" :title="'Bit Merah'" :price="20000" />
      <CardProduk :url="'./produk/tomat.png'" :title="'Tomat'" :price="20000" />
      <CardProduk :url="'./produk/mentimun.png'" :title="'Mantimun'" :price="20000" />
    </div>
    <div class="flex justify-center pb-10">
      <button class="px-4 py-2 bg-primary text-white rounded hover:opacity-80">See More</button>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@components/Navbar.vue";
import Footer from "@components/Footer.vue";
import CardProduk from "@components/CardProduk.vue";
</script>

<style></style>
