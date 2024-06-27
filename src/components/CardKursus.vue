<template>
  <div class="w-[250px] bg-white px-4 py-5 rounded grid gap-8">
    <div class="flex justify-center">
      <div class="w-[100px] h-[100px] bg-cover bg-center" :style="{ 'background-image': 'url(' + url + ')' }"></div>
    </div>
    <div>
      <h3 class="font-bold">{{ title }}</h3>
      <p class="text-sm">{{ desc }}</p>
    </div>
    <button class="px-4 py-2 bg-primary text-white rounded-full">Belajar Sekarang</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>
