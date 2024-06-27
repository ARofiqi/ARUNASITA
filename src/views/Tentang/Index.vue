<template>
  <div>
    <Navbar />
    <div class="h-[400px] bg-cover bg-center" :style="{ 'background-image': 'url(\'./tentang/banner.png \')' }"></div>
    <div class="px-16 py-10">
      <h2 class="text-3xl font-medium pb-10">Tentang Arunasita</h2>
      <div class="grid gap-5">
        <p>
          Arunasita adalah sebuah platform inovatif yang diciptakan oleh seorang mahasiswa dengan visi mulia untuk meningkatkan kesejahteraan petani di Indonesia. Dengan memanfaatkan teknologi terkini, Arunasita menyediakan berbagai solusi
          yang efektif dan efisien untuk membantu para petani dalam mengelola pertanian mereka. Salah satu fitur unggulannya adalah PlantCam, sebuah teknologi kamera cerdas berbasis kecerdasan buatan yang dapat memantau kondisi tanaman
          secara real-time, mengidentifikasi penyakit dan hama, serta memberikan rekomendasi tindakan yang tepat untuk menjaga kesehatan tanaman.
        </p>
        <p>
          Selain PlantCam, Arunasita juga menawarkan fitur informasi berita yang selalu up-to-date mengenai dunia pertanian, termasuk perkembangan teknologi, kebijakan pemerintah, dan tren pasar. Informasi ini sangat berguna bagi petani
          untuk membuat keputusan yang lebih baik dan tepat waktu. Platform ini juga memiliki fitur market yang memudahkan petani untuk menjual hasil panen mereka secara langsung kepada pembeli, sehingga mereka dapat memperoleh harga yang
          lebih adil dan meningkatkan pendapatan.
        </p>
        <p>
          Tidak hanya itu, Arunasita juga menyediakan berbagai materi edukasi yang mencakup panduan praktis, video tutorial, dan artikel informatif tentang teknik pertanian modern. Fitur edukasi ini dirancang untuk meningkatkan pengetahuan
          dan keterampilan petani, sehingga mereka dapat mengoptimalkan hasil pertanian mereka. Dengan segala fitur yang ditawarkan, Arunasita hadir dengan misi untuk memberdayakan petani melalui teknologi, meningkatkan efisiensi dan
          produktivitas pertanian, serta meningkatkan kualitas hidup para petani. Melalui Arunasita, diharapkan derajat petani dapat terangkat, menjadikan mereka lebih sejahtera dan berdaya saing tinggi di era digital ini.
        </p>
      </div>
    </div>
    <div class="flex flex-col px-16 py-10">
      <h3 class="text-xl font-semibold pb-10">Kami telah Bermitra dengan</h3>
      <div class="flex gap-5">
        <IconMitra :url="''" />
        <IconMitra :url="''" />
        <IconMitra :url="''" />
        <IconMitra :url="''" />
        <IconMitra :url="''" />
      </div>
    </div>
    <div class="bg-primary text-white px-16 py-10">
      <div><h2 class="font-semibold text-3xl py-10 text-center">Founder Arunasita</h2></div>
      <div class="flex justify-center gap-32">
        <CardFounder url="./tentang/founder/foto1.png" title="Nama Founder 1" desc="Deskripsi Founder 1" />
        <CardFounder url="./tentang/founder/foto2.png" title="Nama Founder 2" desc="Deskripsi Founder 2" />
        <CardFounder url="./tentang/founder/foto3.png" title="Nama Founder 3" desc="Deskripsi Founder 3" />
      </div>
    </div>
    <div class="py-28 px-16 flex flex-col justify-center items-center">
      <div class="text-center">
        <h2 class="text-4xl font-semibold">Mohon Ulasan dan Sarannya</h2>
        <p>Pendapat Anda sangat berarti bagi kami</p>
      </div>
      <div>
        <form class="grid gap-2 py-10" @submit.prevent="preventSubmit">
          <div class="flex gap-5">
            <label for="nama" class="text-lg font-medium w-[100px]">Nama</label>
            <input type="text" id="nama" name="nama" class="border-[1px] border-gray-800 px-2 py-1 w-[300px]" />
          </div>
          <div class="flex gap-5">
            <label for="email" class="text-lg font-medium w-[100px]">Email</label>
            <input type="email" id="email" name="email" class="border-[1px] border-gray-800 px-2 py-1 w-[300px]" />
          </div>
          <div class="flex gap-5">
            <label for="saran" class="text-lg font-medium w-[100px]">Saran</label>
            <textarea id="saran" name="saran" class="border-[1px] border-gray-800 px-2 py-1 w-[300px] h-[150px]"></textarea>
          </div>
          <div class="flex justify-end">
            <button type="submit" class="bg-primary py-2 px-4 font-semibold text-white rounded-md hover:opacity-80">Kirim</button>
          </div>
        </form>
      </div>
    </div>
    <div class="bg-gray-300 px-16 py-10">
      <h2 class="text-2xl text-center py-10 font-semibold">Terimakasih atas ulasan dan sarannya</h2>
      <div class="grid grid-cols-2 gap-5">
        <CardUlasanPengguna
          :imageSrc="'./tentang/foto1.png'"
          :imageAlt="'heh'"
          :ulasan="'Arunasita adalah platform yang luar biasa! Saya sangat terkesan dengan desain antarmukanya yang intuitif dan mudah digunakan. Berbagai fitur yang ditawarkan sangat membantu dalam manajemen proyek saya. Dukungan pelanggannya juga responsif dan sangat membantu. Saya sangat merekomendasikan Arunasita untuk siapa saja yang mencari solusi manajemen proyek yang efisien.'"
          :nama="'Andi Prasetyo'"
        />
        <CardUlasanPengguna
          :imageSrc="'./tentang/foto2.png'"
          :imageAlt="'heh'"
          :ulasan="'Pengalaman saya menggunakan Arunasita cukup memuaskan. Fitur-fitur yang ditawarkan sangat komprehensif dan membantu dalam mengelola tim dan tugas. Namun, saya berharap ada lebih banyak opsi integrasi dengan alat lain yang sudah kami gunakan. Secara keseluruhan, Arunasita tetap merupakan alat yang hebat untuk meningkatkan produktivitas'"
          :nama="'Steve'"
        />
        <CardUlasanPengguna
          :imageSrc="'./tentang/foto3.png'"
          :imageAlt="'heh'"
          :ulasan="'Saya sangat puas dengan Arunasita! Platform ini benar-benar memudahkan saya dalam mengatur proyek dan tim. Semua fitur bekerja dengan sangat baik, dan desainnya sangat user-friendly. Saya juga sangat menghargai adanya update berkala yang menambahkan fitur baru dan perbaikan bug. Terima kasih, Arunasita'"
          :nama="'Rudi Hartono'"
        />
        <CardUlasanPengguna
          :imageSrc="'./tentang/foto4.png'"
          :imageAlt="'heh'"
          :ulasan="'Arunasita adalah alat yang sangat berguna untuk manajemen proyek. Saya sangat menyukai fitur kolaborasinya yang memudahkan komunikasi antar anggota tim. Namun, ada beberapa fitur yang saya rasa masih bisa ditingkatkan. Meskipun begitu, Arunasita tetap menjadi pilihan utama saya untuk manajemen proyek'"
          :nama="'Dewa'"
        />
        <CardUlasanPengguna
          :imageSrc="'./tentang/foto5.png'"
          :imageAlt="'heh'"
          :ulasan="'Arunasita benar-benar mengubah cara kami bekerja. Dengan fitur-fitur canggihnya, kami dapat mengelola proyek dengan lebih efisien dan efektif. Antarmuka yang bersih dan mudah digunakan membuat semua anggota tim dapat beradaptasi dengan cepat. Saya sangat merekomendasikan Arunasita kepada semua perusahaan yang mencari solusi manajemen proyek yang solid'"
          :nama="'Pombi'"
        />
        <CardUlasanPengguna
          :imageSrc="'./tentang/foto6.png'"
          :imageAlt="'heh'"
          :ulasan="'Arunasita telah menjadi alat yang tak tergantikan dalam manajemen proyek kami. Dari perencanaan hingga pelaksanaan, setiap fitur yang ditawarkan sangat mendukung produktivitas tim. Kemampuan untuk melacak progres dan mengelola tugas secara real-time membuat semuanya berjalan lebih lancar. Tim supportnya juga sangat responsif dan membantu dalam setiap masalah yang kami hadapi. Sangat direkomendasikan untuk siapa saja yang membutuhkan alat manajemen proyek yang handal dan efisien'"
          :nama="'Jonathan'"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@components/Navbar.vue";
import Footer from "@components/Footer.vue";
import CardUlasanPengguna from "@components/CardUlasanPengguna.vue";
import IconMitra from "@components/IconMitra.vue";
import CardFounder from "@components/CardFounder.vue";

export default {
  components: {
    Navbar,
    Footer,
    CardUlasanPengguna,
    IconMitra,
    CardFounder,
  },
  methods: {
    preventSubmit(e) {
      e.preventDefault();
      alert("hallo");
    },
  },
};
</script>

<style></style>
