<template>
  <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center gap-2">
    <h3 class="text-lg font-semibold">{{ hari }}</h3>
    <div class="w-10">
      <img :src="cuacaSrc" alt="" />
    </div>
    <p class="text-gray-500">{{ suhu }}°C</p>
  </div>
</template>

<script>
export default {
  props: {
    hari: {
      type: String,
      required: true,
    },
    suhu: {
      type: Number,
      required: true,
    },
    cuaca: {
      type: String,
      required: true,
    },
  },
  computed: {
    cuacaSrc() {
      return `assets/weather/${this.cuaca}.svg`;
    },
  },
};
</script>
