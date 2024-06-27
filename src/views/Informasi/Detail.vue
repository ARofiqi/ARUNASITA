<template>
  <div>
    <Navbar />
    <div class="flex justify-between px-14">
      <p>Informasi / Judul artikel</p>
      <Back />
    </div>
    <div class="flex px-14 py-10 gap-5">
      <div class="w-4/5 grid gap-8">
        <div class="">
          <h2 class="text-3xl font-semibold">Inovasi Teknologi Pertanian: Solusi untuk Ketahanan Pangan di Era Digital</h2>
          <p class="font-light">Ahmad Rofiqi</p>
          <p class="font-light">Selasa, 21 Mei 2024</p>
        </div>
        <div>
          <!-- <img src="" alt="" class="w-[700px] h-[400px] bg-red-300" /> -->
          <div class="w-[700px] h-[400px] bg-cover bg-center relative" :style="{ 'background-image': 'url(\'../../../../../informasi/detail/banner.png\')' }"></div>
          <p class="text-xs italic">Sumber : https://www.figma.com/design/YclqAHgkdUL0UujnoNRvzU/ARUNASITA?node-id=225-414&t=lWcG8wAWSApX4QhJ-0</p>
        </div>
        <div class="grid gap-3 text-justify pr-5 indent-10">
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem morbi consequat odio placerat lacus fermentum vestibulum augue. Id tincidunt est massa purus pulvinar nisl. Mauris non maecenas quis odio nam risus. Et aliquet at gravida diam
            ultrices., Lorem ipsum dolor sit amet consectetur. Lorem morbi consequat odio placerat lacus fermentum vestibulum augue. Id tincidunt est massa purus pulvinar nisl. Mauris non maecenas quis odio nam risus. Et aliquet at gravida
            diam ultrices.Lorem ipsum dolor sit amet consectetur. Lorem morbi consequat odio placerat lacus fermentum vestibulum augue. Id tincidunt est massa purus pulvinar nisl. Mauris non maecenas quis odio nam risus. Et aliquet at
            gravida diam ultrices.Lorem ipsum dolor sit amet consectetur. Lorem morbi consequat odio placerat lacus fermentum vestibulum augue. Id tincidunt est massa purus pulvinar nisl. Mauris non maecenas quis odio nam risus. Et aliquet
            at gravida diam ultrices.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem morbi consequat odio placerat lacus fermentum vestibulum augue. Id tincidunt est massa purus pulvinar nisl. Mauris non maecenas quis odio nam risus. Et aliquet at gravida diam
            ultrices., Lorem ipsum dolor sit amet consectetur. Lorem morbi consequat odio placerat lacus fermentum vestibulum augue. Id tincidunt est massa purus pulvinar nisl. Mauris non maecenas quis odio nam risus. Et aliquet at gravida
            diam ultrices.Lorem ipsum dolor sit amet consectetur. Lorem morbi consequat odio placerat lacus fermentum vestibulum augue. Id tincidunt est massa purus pulvinar nisl. Mauris non maecenas quis odio nam risus. Et aliquet at
            gravida diam ultrices.Lorem ipsum dolor sit amet consectetur. Lorem morbi consequat odio placerat lacus fermentum vestibulum augue. Id tincidunt est massa purus pulvinar nisl. Mauris non maecenas quis odio nam risus. Et aliquet
            at gravida diam ultrices.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem morbi consequat odio placerat lacus fermentum vestibulum augue. Id tincidunt est massa purus pulvinar nisl. Mauris non maecenas quis odio nam risus. Et aliquet at gravida diam
            ultrices., Lorem ipsum dolor sit amet consectetur. Lorem morbi consequat odio placerat lacus fermentum vestibulum augue. Id tincidunt est massa purus pulvinar nisl. Mauris non maecenas quis odio nam risus. Et aliquet at gravida
            diam ultrices.Lorem ipsum dolor sit amet consectetur. Lorem morbi consequat odio placerat lacus fermentum vestibulum augue. Id tincidunt est massa purus pulvinar nisl. Mauris non maecenas quis odio nam risus. Et aliquet at
            gravida diam ultrices.Lorem ipsum dolor sit amet consectetur. Lorem morbi consequat odio placerat lacus fermentum vestibulum augue. Id tincidunt est massa purus pulvinar nisl. Mauris non maecenas quis odio nam risus. Et aliquet
            at gravida diam ultrices.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem morbi consequat odio placerat lacus fermentum vestibulum augue. Id tincidunt est massa purus pulvinar nisl. Mauris non maecenas quis odio nam risus. Et aliquet at gravida diam
            ultrices., Lorem ipsum dolor sit amet consectetur. Lorem morbi consequat odio placerat lacus fermentum vestibulum augue. Id tincidunt est massa purus pulvinar nisl. Mauris non maecenas quis odio nam risus. Et aliquet at gravida
            diam ultrices.Lorem ipsum dolor sit amet consectetur. Lorem morbi consequat odio placerat lacus fermentum vestibulum augue. Id tincidunt est massa purus pulvinar nisl. Mauris non maecenas quis odio nam risus. Et aliquet at
            gravida diam ultrices.Lorem ipsum dolor sit amet consectetur. Lorem morbi consequat odio placerat lacus fermentum vestibulum augue. Id tincidunt est massa purus pulvinar nisl. Mauris non maecenas quis odio nam risus. Et aliquet
            at gravida diam ultrices.
          </p>
        </div>
        <div class="flex gap-3 py-10">
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
      <div class="w-2/5">
        <h2 class="text-lg font-semibold pb-5">Artikel Terbaru</h2>
        <div class="flex gap-5 flex-col">
          <div class="flex gap-3">
            <div class="w-[300px] h-[100px] bg-cover bg-center relative" :style="{ 'background-image': 'url(\'../../../../../informasi/detail/foto1.png\')' }"></div>
            <div class="flex flex-col justify-between">
              <h3 class="text-sm font-semibold">Lorem morbi consequat odio placerat lacus fermentum vestibulum augue,</h3>
              <p class="text-xs">2 Days ago</p>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="w-[300px] h-[100px] bg-cover bg-center relative" :style="{ 'background-image': 'url(\'../../../../../informasi/detail/foto2.png\')' }"></div>
            <div class="flex flex-col justify-between">
              <h3 class="text-sm font-semibold">Lorem morbi consequat odio placerat lacus fermentum vestibulum augue,</h3>
              <p class="text-xs">2 Days ago</p>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="w-[300px] h-[100px] bg-cover bg-center relative" :style="{ 'background-image': 'url(\'../../../../../informasi/detail/foto3.png\')' }"></div>
            <div class="flex flex-col justify-between">
              <h3 class="text-sm font-semibold">Lorem morbi consequat odio placerat lacus fermentum vestibulum augue,</h3>
              <p class="text-xs">2 Days ago</p>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="w-[300px] h-[100px] bg-cover bg-center relative" :style="{ 'background-image': 'url(\'../../../../../informasi/detail/foto4.png\')' }"></div>
            <div class="flex flex-col justify-between">
              <h3 class="text-sm font-semibold">Lorem morbi consequat odio placerat lacus fermentum vestibulum augue,</h3>
              <p class="text-xs">2 Days ago</p>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="w-[300px] h-[100px] bg-cover bg-center relative" :style="{ 'background-image': 'url(\'../../../../../informasi/detail/foto5.png\')' }"></div>
            <div class="flex flex-col justify-between">
              <h3 class="text-sm font-semibold">Lorem morbi consequat odio placerat lacus fermentum vestibulum augue,</h3>
              <p class="text-xs">2 Days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@components/Navbar.vue";
import Footer from "@components/Footer.vue";
import Back from "@components/Back.vue";
</script>

<style></style>
