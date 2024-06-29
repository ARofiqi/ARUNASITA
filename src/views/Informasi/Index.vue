<template>
  <div class="">
    <Navbar />
    <div class="py-16">
      <h2 class="px-14 pb-10 font-bold text-4xl">Berita Terbaru</h2>
      <div class="bg-gray-200 flex gap-5">
        <div class="h-[400px] w-[550px] bg-cover bg-center relative" :style="{ 'background-image': 'url(\'./informasi/foto1.png\')' }"></div>
        <div class="flex flex-col gap-3 justify-center">
          <h2 class="text-lg font-semibold">Pencapaian Petani Milenial</h2>
          <p class="font-light w-2/3">Lorem ipsum dolor sit amet consectetur. Ac scelerisque enim interdum egestas risus sed vel non. Egestas nibh dignissim pellentesque metus quis. Eget.</p>
          <p class="text-sm pt-10">2 Hari yang lalu</p>
        </div>
      </div>
    </div>
    <div class="bg-primary text-white px-10 py-10">
      <h2 class="text-2xl font-semibold pb-10">Info Terkini</h2>
      <div class="grid grid-cols-2 gap-5">
        <CardInfoTerkini v-for="item in infoTerkini" :key="item.id" :url="item.url" :title="item.title" :desc="item.desc" :date="item.date" />
      </div>
      <div class="py-5 text-end">
        <p class="underline">Baca Lebih Banyak</p>
      </div>
    </div>
    <div class="px-14 py-12 bg-gray-100">
      <h2 class="font-bold text-2xl pb-10">Berita</h2>
      <div class="grid gap-10">
        <CardBerita v-for="item in berita" :key="item.id" :url="item.url" :title="item.title" :content="item.content" :date="item.date" />
      </div>
      <div class="py-5 flex justify-center">
        <button class="bg-primary text-white px-4 py-2 rounded hover:opacity-80">Baca Lainnya</button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@components/Navbar.vue";
import Footer from "@components/Footer.vue";
import CardInfoTerkini from "@components/CardInfoTerkini.vue";
import CardBerita from "@components/CardBerita.vue";
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
      berita: [
        {
          id: 1,
          url: "./berita/foto1.png",
          title: "Program Pemerintah untuk Mendukung Pertanian Berkelanjutan dan Ramah Lingkungan",
          content:
            "Lorem ipsum dolor sit amet consectetur. Ac scelerisque enim interdum egestas risus sed vel non. Egestas nibh dignissim pellentesque metus quis. Eget.Lorem ipsum dolor sit amet consectetur. Ac scelerisque enim interdum egestas risus sed vel non. Egestas nibh dignissim pellentesque metus quis. Eget.Lorem ipsum dolor sit amet consectetur. Ac scelerisque enim interdum egestas risus sed vel non. Egestas nibh dignissim pellentesque metus quis. Eget.Lorem ipsum dolor sit amet consectetur. Ac scelerisque enim interdum egestas risus sed vel non. Egestas nibh dignissim pellentesque metus quis. Eget.",
          date: "3 Days Ago",
        },
        {
          id: 2,
          url: "./berita/foto2.png",
          title: "Dampak Perubahan Iklim terhadap Produktivitas Pertanian di Indonesia",
          content:
            "Lorem ipsum dolor sit amet consectetur. Ac scelerisque enim interdum egestas risus sed vel non. Egestas nibh dignissim pellentesque metus quis. Eget.Lorem ipsum dolor sit amet consectetur. Ac scelerisque enim interdum egestas risus sed vel non. Egestas nibh dignissim pellentesque metus quis. Eget.Lorem ipsum dolor sit amet consectetur. Ac scelerisque enim interdum egestas risus sed vel non. Egestas nibh dignissim pellentesque metus quis. Eget.Lorem ipsum dolor sit amet consectetur. Ac scelerisque enim interdum egestas risus sed vel non. Egestas nibh dignissim pellentesque metus quis. Eget.",
          date: "3 Days Ago",
        },
        {
          id: 3,
          url: "./berita/foto3.png",
          title: "Inovasi Teknologi dalam Pertanian: Penggunaan Drone untuk Pemantauan Tanaman",
          content:
            "Lorem ipsum dolor sit amet consectetur. Ac scelerisque enim interdum egestas risus sed vel non. Egestas nibh dignissim pellentesque metus quis. Eget.Lorem ipsum dolor sit amet consectetur. Ac scelerisque enim interdum egestas risus sed vel non. Egestas nibh dignissim pellentesque metus quis. Eget.Lorem ipsum dolor sit amet consectetur. Ac scelerisque enim interdum egestas risus sed vel non. Egestas nibh dignissim pellentesque metus quis. Eget.Lorem ipsum dolor sit amet consectetur. Ac scelerisque enim interdum egestas risus sed vel non. Egestas nibh dignissim pellentesque metus quis. Eget.",
          date: "3 Days Ago",
        },
      ],
    };
  },
  components: {
    Navbar,
    Footer,
    CardInfoTerkini,
    CardBerita,
  },
};
</script>

<style></style>
