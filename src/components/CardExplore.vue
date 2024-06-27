<template>
  <router-link :to="{ name: 'PlantCamDetail' }">
    <div class="w-[200px] h-[250px] rounded-lg overflow-hidden relative">
      <div class="text-white absolute p-2 flex flex-col justify-end bg-[linear-gradient(180deg,_rgba(235,_208,_208,_0)_0%,_#000000_100%)] w-full h-full">
        <h3 class="text-lg font-semibold">{{ title }}</h3>
        <p class="text-xs italic">{{ subtitle }}</p>
      </div>
      <div class="w-full h-full bg-cover bg-center" :style="{ 'background-image': 'url(' + url + ')' }"></div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "CardExplore",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
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

<style scoped></style>
