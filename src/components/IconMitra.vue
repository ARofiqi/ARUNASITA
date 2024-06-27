<template>
  <div class="h-[100px] w-[100px] bg-cover bg-center bg-gray-300" :style="{ 'background-image': 'url(' + url + ')' }"></div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>
