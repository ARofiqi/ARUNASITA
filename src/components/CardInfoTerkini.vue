<template>
  <router-link :to="{ name: 'InformasiDetail' }" class="bg-white text-black flex py-5 px-3 rounded-lg">
    <div class="w-1/2 bg-cover bg-center h-[280px] relative" :style="{ 'background-image': 'url(' + url + ')' }"></div>
    <div class="px-3 flex flex-col justify-between w-1/2">
      <h3 class="text-lg font-semibold">{{ title }}</h3>
      <p class="text-xs font-light">
        {{ desc }}
      </p>
      <p class="text-sm">{{ date }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      default: "Title",
    },
    desc: {
      type: String,
      required: true,
      default: "Deskripsi",
    },
    date: {
      type: String,
      required: true,
      default: "Senin, 1 Januari 2000",
    },
  },
};
</script>

<style scoped></style>
