<template>
  <div>
    <Navbar />
    <div>
      <div class="flex gap-2 justify-center py-10">
        <!-- <div><img src="" alt="" class="w-[408px] h-[408px] bg-red-400" /></div> -->
        <div class="w-[408px] h-[408px] bg-cover bg-center" :style="{ 'background-image': 'url(\'../../../../../exploreDetail/foto1.png\')' }"></div>
        <div class="grid grid-cols-4 gap-2">
          <div class="w-[200px] h-[200px] bg-cover bg-center" :style="{ 'background-image': 'url(\'../../../../../exploreDetail/foto2.png\')' }"></div>
          <div class="w-[200px] h-[200px] bg-cover bg-center" :style="{ 'background-image': 'url(\'../../../../../exploreDetail/foto3.png\')' }"></div>
          <div class="w-[200px] h-[200px] bg-cover bg-center" :style="{ 'background-image': 'url(\'../../../../../exploreDetail/foto4.png\')' }"></div>
          <div class="w-[200px] h-[200px] bg-cover bg-center" :style="{ 'background-image': 'url(\'../../../../../exploreDetail/foto5.png\')' }"></div>
          <div class="w-[200px] h-[200px] bg-cover bg-center" :style="{ 'background-image': 'url(\'../../../../../exploreDetail/foto6.png\')' }"></div>
          <div class="w-[200px] h-[200px] bg-cover bg-center" :style="{ 'background-image': 'url(\'../../../../../exploreDetail/foto7.png\')' }"></div>
          <div class="w-[200px] h-[200px] bg-cover bg-center" :style="{ 'background-image': 'url(\'../../../../../exploreDetail/foto8.png\')' }"></div>
          <div class="w-[200px] h-[200px] bg-cover bg-center" :style="{ 'background-image': 'url(\'../../../../../exploreDetail/foto9.png\')' }"></div>
        </div>
      </div>
      <div class="px-14 grid gap-5">
        <div>
          <h2 class="font-bold text-3xl">Tomat</h2>
          <p class="font-light italic text-sm">Solanum lycopersicum</p>
        </div>
        <div>
          <h3 class="font-semibold text-xl">Kebutuhan Tumbuh</h3>
          <p class="indent-5">Cahaya: Sinar matahari penuh (6-8 jam per hari).</p>
          <p class="indent-5">Suhu: 20-25°C pada siang hari, tidak kurang dari 15°C pada malam hari.</p>
          <p class="indent-5">Kelembaban: Kelembaban relatif 60-70%.</p>
          <p class="indent-5">Tanah: Tanah berdrainase baik, kaya bahan organik dengan pH 6.0-6.8.</p>
        </div>
        <div>
          <h3 class="font-semibold text-xl">Tahap Pertumbuhan</h3>
          <p class="indent-5">Pembibitan (Seedling): 1-3 minggu setelah penyemaian.</p>
          <p class="indent-5">Vegetatif (Vegetative): 3-8 minggu setelah penyemaian.</p>
          <p class="indent-5">Pembungaan (Flowering): 8-12 minggu setelah penyemaian.</p>
          <p class="indent-5">Berbuah (Fruiting): 12-16 minggu setelah penyemaian.</p>
          <p class="indent-5">Panen (Harvesting): 16-20 minggu setelah penyemaian.</p>
        </div>
      </div>
      <div class="flex gap-3 px-14 py-10">
        <button class="bg-primary text-white rounded px-4 py-2 hover:opacity-80 border-2 border-primary flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-white">
            <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
            />
          </svg>
          Baca Offline
        </button>
        <button class="bg-primary text-white rounded px-4 py-2 hover:opacity-80 border-2 border-primary flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 fill-white">
            <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"
            />
          </svg>
          Bagikan
        </button>
      </div>
    </div>
    <div class="px-14 py-10">
      <h2 class="font-bold text-2xl py-10">Artikel Terkait</h2>
      <div>
        <div class="grid grid-cols-4 gap-2">
          <CardArtikelTerkini :title="'Manfaat Kesehatan Tomat: Nutrisi dan Khasiatnya'" :date="'12 Desember 2023'" :url="'../../../../../artikelTerkait/foto1.png'" />
          <CardArtikelTerkini :title="'Cara Menanam dan Merawat Tomat di Rumah'" :date="'1 April 2024'" :url="'../../../../../artikelTerkait/foto2.png'" />
          <CardArtikelTerkini :title="'Tomat: Sejarah, Varietas, dan Budidaya di Berbagai Negara'" :date="'5 Mei 2023'" :url="'../../../../../artikelTerkait/foto3.png'" />
          <CardArtikelTerkini :title="'Peran Tomat dalam Diet Mediterania: Studi dan Fakta'" :date="'12 September 2020'" :url="'../../../../../artikelTerkait/foto4.png'" />
        </div>
      </div>
    </div>
    <div class="px-14 py-10">
      <h2 class="text-2xl font-bold pb-10">Produk Terkait</h2>
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
import Navbar from "@components/Navbar.vue";
import Footer from "@components/Footer.vue";
import CardArtikelTerkini from "@components/CardArtikelTerkini.vue";
import CardProduk from "@components/CardProduk.vue";
</script>

<style></style>
