<template>
  <div class="flex gap-3 bg-white rounded-md overflow-hidden">
    <div class="w-1/3 bg-cover bg-center relative" :style="{ 'background-image': 'url(' + url + ')' }"></div>
    <div class="flex flex-col gap-5 justify-center w-2/3 p-2">
      <h2 class="text-lg font-semibold">{{ title }}</h2>
      <p class="text-sm font-light w-2/3">{{ content }}</p>
      <p class="text-xs">{{ date }}</p>
    </div>
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
    content: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
};
</script>
