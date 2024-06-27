<template>
  <div>
    <div class="w-[300px] h-[200px] bg-cover bg-center" :style="{ 'background-image': 'url(' + url + ')' }"></div>
    <h3 class="font-semibold text-lg">{{ title }}</h3>
    <p class="font-light text-sm">{{ date }}</p>
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
    date: {
      type: String,
      required: true,
    },
  },
};
</script>
