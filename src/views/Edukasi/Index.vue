<template>
  <div>
    <Navbar />
    <div>
      <div class="w-full h-[400px] bg-cover bg-center" :style="{ 'background-image': 'url(\'./edukasi/banner.png\')' }"></div>
      <div class="px-16 py-10 grid gap-5">
        <div>
          <h3 class="font-semibold text-xl">Video Pembelajaran</h3>
        </div>
        <div class="flex gap-2">
          <CardVideo v-for="item in videos" :key="item.id" :url="item.url" :title="item.title" />
        </div>
        <div>
          <p class="text-sm underline text-end">Lihat Lainnya</p>
        </div>
      </div>
    </div>
    <div class="bg-primary py-10">
      <div>
        <h2 class="text-3xl font-semibold text-white text-center py-10">Ingin mengetahui dunia pertanian lebih dalam lagi? Yuk Belajar bareng!!!</h2>
      </div>
      <div class="flex justify-center gap-5">
        <CardKursus v-for="item in kursus" :key="item.id" :title="item.title" :desc="item.desc" :url="item.url" />
      </div>
    </div>
    <div class="px-16 py-10">
      <div>
        <h2 class="text-2xl font-bold text-center py-10">Panduan Praktis Untuk Pemula</h2>
      </div>
      <div class="flex flex-wrap gap-3 justify-center">
        <CardPanduan v-for="item in panduan" :key="item.id" :url="item.url" :title="item.title" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@components/Navbar.vue";
import Footer from "@components/Footer.vue";
import CardVideo from "@components/CardVideoPembelajaran.vue";
import CardPanduan from "@components/CardPanduanPraktis.vue";
import CardKursus from "@components/CardKursus.vue";

export default {
  data() {
    return {
      videos: [
        { id: 1, url: "./edukasi/foto1.png", title: "Tutorial Menanam Padi diember" },
        { id: 2, url: "./edukasi/foto2.png", title: "Tutorial Menanam Padi diember" },
        { id: 3, url: "./edukasi/foto3.png", title: "Tutorial Menanam Padi diember" },
        { id: 4, url: "./edukasi/foto4.png", title: "Tutorial Menanam Padi diember" },
      ],
      kursus: [
        {
          id: 1,
          title: "Teori Tanah",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa architecto doloribus eum veritatis nisi quos consequatur dolor iste voluptatibus consectetur praesentium quibusdam, dolorum incidunt dignissimos deserunt repellendus? Incidunt, odit at.",
          url: "./edukasi/foto1.png",
        },
        {
          id: 2,
          title: "Teori Tanah",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa architecto doloribus eum veritatis nisi quos consequatur dolor iste voluptatibus consectetur praesentium quibusdam, dolorum incidunt dignissimos deserunt repellendus? Incidunt, odit at.",
          url: "./edukasi/foto2.png",
        },
        {
          id: 3,
          title: "Teori Tanah",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa architecto doloribus eum veritatis nisi quos consequatur dolor iste voluptatibus consectetur praesentium quibusdam, dolorum incidunt dignissimos deserunt repellendus? Incidunt, odit at.",
          url: "./edukasi/foto3.png",
        },
      ],
      panduan: [
        {
          id: 1,
          url: "./panduanPraktis/foto1.png",
          title: "Langkah - langkah menanam kol",
        },
        {
          id: 2,
          url: "./panduanPraktis/foto2.png",
          title: "Tips membuat garden di halaman rumah",
        },
        {
          id: 3,
          url: "./panduanPraktis/foto3.png",
          title: "Menanam tanaman secara vertikal",
        },
        {
          id: 4,
          url: "./panduanPraktis/foto4.png",
          title: "Pentingnya mengontrol kesehatan tanaman",
        },
        {
          id: 5,
          url: "./panduanPraktis/foto5.png",
          title: "Menanam Tanaman Secara Hidroponik",
        },
        {
          id: 6,
          url: "./panduanPraktis/foto6.png",
          title: "Tips agar pohon mangga cepat berbuah",
        },
      ],
    };
  },
  components: {
    Navbar,
    Footer,
    CardVideo,
    CardPanduan,
    CardKursus,
  },
};
</script>

<style></style>
