<template>
  <div>
    <div class="w-[300px] h-[200px] bg-cover bg-center" :style="{ 'background-image': 'url(' + url + ')' }"></div>
    <p class="font-medium">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
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
