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
      <CardProduk v-for="item in produks" :key="item.id" :url="item.url" :title="item.title" :price="item.price" />
    </div>
    <div class="flex justify-center pb-10">
      <button class="px-4 py-2 bg-primary text-white rounded hover:opacity-80">See More</button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@components/Navbar.vue";
import Footer from "@components/Footer.vue";
import CardProduk from "@components/CardProduk.vue";
export default {
  data() {
    return {
      produks: [
        { id: 1, url: "./produk/caisim.png", title: "Caisim", price: 20000 },
        { id: 2, url: "./produk/bawang-merah.png", title: "Bawang Merang", price: 20000 },
        { id: 3, url: "./produk/bayam.png", title: "Bayam", price: 20000 },
        { id: 4, url: "./produk/terong.png", title: "Terong", price: 20000 },
        { id: 5, url: "./produk/jagung-manis.png", title: "Jagung Manis", price: 20000 },
        { id: 6, url: "./produk/cabai-rawit.png", title: "Cabai Rawit", price: 20000 },
        { id: 7, url: "./produk/bit-merah.png", title: "Bit Merah", price: 20000 },
        { id: 8, url: "./produk/tomat.png", title: "Tomat", price: 20000 },
        { id: 9, url: "./produk/mentimun.png", title: "Mantimun", price: 20000 },
      ],
    };
  },
  components: {
    Navbar,
    Footer,
    CardProduk,
  },
};
</script>

<style></style>
