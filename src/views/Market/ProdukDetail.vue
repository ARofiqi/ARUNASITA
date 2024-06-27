<template>
  <div>
    <Navbar />
    <div class="px-16 py-10 flex justify-between">
      <p>Market / Jeniis Produk / Nama Produk</p>
      <div>
        <p>Prev | Next</p>
      </div>
    </div>
    <div class="px-16 py-10 flex gap-3">
      <div>
        <div>
          <div class="w-[600px] h-[600px] bg-cover bg-center relative" :style="{ 'background-image': 'url(\' ../../../../../produkDetail/foto1.png\')' }"></div>
        </div>
        <div class="flex pt-2 gap-2">
          <div class="w-[70px] h-[70px] bg-cover bg-center relative" :style="{ 'background-image': 'url(\' ../../../../../produkDetail/foto2.png\')' }"></div>
          <div class="w-[70px] h-[70px] bg-cover bg-center relative" :style="{ 'background-image': 'url(\' ../../../../../produkDetail/foto3.png\')' }"></div>
          <div class="w-[70px] h-[70px] bg-cover bg-center relative" :style="{ 'background-image': 'url(\' ../../../../../produkDetail/foto4.png\')' }"></div>
          <div class="w-[70px] h-[70px] bg-cover bg-center relative" :style="{ 'background-image': 'url(\' ../../../../../produkDetail/foto5.png\')' }"></div>
        </div>
      </div>
      <div>
        <h2 class="text-3xl font-semibold">Wortel</h2>
        <p class="text-sm">Hasil Pangan</p>
        <p class="font-bold py-8 text-xl">Rp.12.000.00 / Kg</p>
        <p>
          Wortel adalah sayuran akar yang kaya akan beta-karoten, serat, vitamin K, dan antioksidan. Biasanya berwarna oranye, wortel dapat dinikmati mentah, dimasak, atau sebagai bahan dalam berbagai hidangan. Tanaman ini mudah
          dibudidayakan dan populer karena manfaat kesehatannya yang mendukung penglihatan, pencernaan, dan sistem kekebalan tubuh.
        </p>
        <div class="py-10">
          <p class="text-xl font-semibold">Jumlah</p>
          <div class="flex bg-gray-200 items-center w-fit p-2 justify-center">
            <svg @click="incrementValue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 cursor-pointer">
              <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
            <input type="number" v-model="inputValue" class="w-20 bg-inherit text-center appearance-none" />
            <svg @click="decrementValue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 cursor-pointer">
              <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
        </div>
        <div>
          <button class="bg-primary px-8 py-4 rounded text-white hover:opacity-80">Tambahkan Ke Keranjang</button>
        </div>
      </div>
    </div>
    <div class="px-16 py-10">
      <h2 class="text-2xl font-semibold pb-10">Produk Terkait</h2>
      <div class="grid grid-cols-3 gap-5">
        <CardProduk :url="'../../../../../produk/caisim.png'" :title="'Caisim'" :price="20000" />
        <CardProduk :url="'../../../../../produk/cabai-rawit.png'" :title="'Cabai Rawit'" :price="25000" />
        <CardProduk :url="'../../../../../produk/jagung-manis.png'" :title="'Jagung Manis'" :price="15000" />
      </div>
      <div class="py-5 text-end">
        <p class="underline">Lihat Lebih Banyak</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "@components/Navbar.vue";
import Footer from "@components/Footer.vue";
import CardProduk from "@components/CardProduk.vue";

const inputValue = ref(0);

const incrementValue = () => {
  inputValue.value++;
};

const decrementValue = () => {
  if (inputValue.value > 0) {
    inputValue.value--;
  }
};
</script>

<style></style>
