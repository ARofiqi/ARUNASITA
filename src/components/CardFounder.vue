<template>
  <div class="w-[200px] text-center">
    <div class="w-[150px] m-auto h-[150px] rounded-full bg-gray-300 mb-5 bg-cover bg-center" :style="{ 'background-image': 'url(' + url + ')' }"></div>
    <h3 class="text-lg font-semibold">{{ title }}</h3>
    <p class="text-xs">{{ desc }}</p>
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
    desc: {
      type: String,
      required: true,
    },
  },
};
</script>
