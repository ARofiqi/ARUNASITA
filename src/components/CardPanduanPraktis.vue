<template>
  <div class="relative flex justify-start items-end">
    <p class="text-lg font-semibold text-white absolute z-10 py-5 px-3">{{ title }}</p>
    <div class="w-[300px] h-[450px]  p-4 flex items-end bg-cover bg-center filter brightness-50" :style="{ 'background-image': 'url(' + url + ')' }"></div>
  </div>
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
    },
  },
};
</script>
