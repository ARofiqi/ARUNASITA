<template>
  <div class="">
    <Navbar />
    <div class="flex gap-5">
      <div class="w-1/2 h-[500px] bg-cover bg-center relative" :style="{ 'background-image': 'url(./hero.jpg)' }"></div>
      <div class="w-1/2 flex flex-col items-start justify-center gap-5">
        <h1 class="text-3xl font-semibold">Tumbuh Bersama Arunasita: Pertanian Cerdas untuk Masa Depan</h1>
        <router-link :to="{ name: 'PlantCam' }">
          <button class="bg-primary hover:bg-white hover:text-primary text-white border-2 border-primary font-bold py-2 px-4 rounded-full">Coba PlantCam</button>
        </router-link>
      </div>
    </div>
    <div class="py-20 px-10">
      <div class="text-center">
        <h2 class="font-semibold text-3xl">Perakiraan Cuaca</h2>
        <p class="font-semibold text-sm">Kabupaten Sukabumi, Provinsi Jawa Barat</p>
      </div>
      <div class="grid grid-cols-8 gap-5">
        <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center gap-2">
          <h3 class="text-lg font-semibold">Senin</h3>
          <div class="w-10">
            <img src="@assets/weather/Berangin.svg" alt="" />
          </div>
          <p class="text-gray-500">20°C</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center gap-2">
          <h3 class="text-lg font-semibold">Selasa</h3>
          <div class="w-10">
            <img src="@assets/weather/Cerah.svg" alt="" />
          </div>
          <p class="text-gray-500">30°C</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center gap-2">
          <h3 class="text-lg font-semibold">Rabu</h3>
          <div class="w-10">
            <img src="@assets/weather/HujanCerah.svg" alt="" />
          </div>
          <p class="text-gray-500">30°C</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center gap-2">
          <h3 class="text-lg font-semibold">Kamis</h3>
          <div class="w-10">
            <img src="@assets/weather/Mendung.svg" alt="" />
          </div>
          <p class="text-gray-500">30°C</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center gap-2">
          <h3 class="text-lg font-semibold">Jumat</h3>
          <div class="w-10">
            <img src="@assets/weather/Gerimis.svg" alt="" />
          </div>
          <p class="text-gray-500">30°C</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center gap-2">
          <h3 class="text-lg font-semibold">Sabtu</h3>
          <div class="w-10">
            <img src="@assets/weather/Hujan.svg" alt="" />
          </div>
          <p class="text-gray-500">30°C</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center gap-2">
          <h3 class="text-lg font-semibold">Minggu</h3>
          <div class="w-10">
            <img src="@assets/weather/Hujan.svg" alt="" />
          </div>
          <p class="text-gray-500">30°C</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center gap-2">
          <h3 class="text-lg font-semibold">Senin</h3>
          <div class="w-10">
            <img src="@assets/weather/Gerimis.svg" alt="" />
          </div>
          <p class="text-gray-500">30°C</p>
        </div>
      </div>
    </div>
    <div class="bg-primary text-white px-10 py-10">
      <h2 class="text-3xl font-semibold pb-10">Info Terkini</h2>
      <div class="grid grid-cols-2 gap-5">
        <CardInfoTerkini v-for="item in infoTerkini" :key="item.id" :url="item.url" :title="item.title" :desc="item.desc" :date="item.date" />
      </div>
      <div class="py-5 text-end">
        <p class="underline cursor-pointer inline-block">Baca Lebih Banyak</p>
      </div>
    </div>
    <div class="px-10 py-20">
      <h2 class="text-3xl font-semibold pb-10">Produk Pertanian</h2>
      <div class="grid grid-cols-3 gap-5">
        <CardProduk v-for="produk in produks" :key="produk.id" :url="produk.url" :title="produk.title" :price="produk.price" />
      </div>
      <div class="py-5 text-center">
        <p class="bg-primary inline-block px-4 py-2 text-white rounded font-semibold hover:opacity-80 cursor-pointer">Lihat Lebih Banyak</p>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "@components/Navbar.vue";
import Footer from "@components/Footer.vue";
import CardInfoTerkini from "@components/CardInfoTerkini.vue";
import CardProduk from "@components/CardProduk.vue";
import Cuaca from "@components/weather/Cuaca.vue";
// import axios from "axios";

export default {
  data() {
    return {
      infoTerkini: [
        {
          id: "1",
          url: "./infoTerkini/img1.jpg",
          title: "Dampak Teknologi Terhadap Pertanian",
          desc: "Lorem ipsum dolor sit amet consectetur. Ac scelerisque enim interdum egestas risus sed vel non. Egestas nibh dignissim pellentesque metus quis. Eget.Lorem ipsum dolor sit amet consectetur. Ac scelerisque enim interdum egestas risus sed vel non. Egestas nibh dignissim pellentesque metus quis. Eget.",
          date: "Senin, 1 Januari 2029",
        },
        {
          id: "2",
          url: "./infoTerkini/img2.jpg",
          title: "Dampak Teknologi Terhadap Pertanian",
          desc: "Lorem ipsum dolor sit amet consectetur. Ac scelerisque enim interdum egestas risus sed vel non. Egestas nibh dignissim pellentesque metus quis. Eget.Lorem ipsum dolor sit amet consectetur. Ac scelerisque enim interdum egestas risus sed vel non. Egestas nibh dignissim pellentesque metus quis. Eget.",
          date: "Senin, 1 Januari 2029",
        },
      ],
      produks: [
        {
          id: "1",
          url: "./produk/caisim.png",
          title: "Caisim",
          price: 20000,
        },
        {
          id: "1",
          url: "./produk/cabai-rawit.png",
          title: "Cabai Rawit",
          price: 25000,
        },
        {
          id: "1",
          url: "./produk/jagung-manis.png",
          title: "Jagung Manis",
          price: 15000,
        },
      ],
    };
  },
  components: {
    Navbar,
    Footer,
    CardInfoTerkini,
    CardProduk,
    Cuaca,
  },
  created() {
    this.fetchBerita();
  },
  methods: {
    async fetchBerita() {
      // try {
      //   const response = await axios.get("https://my-json-server.typicode.com/typicode/demo/posts");
      //   this.berita = response.data;
      //   console.log(this.berita);
      // } catch (error) {
      //   console.error("Error fetching berita:", error);
      // }
    },
  },
};
</script>

<style></style>
