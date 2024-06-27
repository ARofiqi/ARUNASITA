<template>
  <div class="flex gap-2 border-2 border-black px-3 py-2">
    <img :src="imageSrc" alt="" class="w-[100px] h-[100px] bg-red-300 rounded-full" />
    <div class="flex flex-col gap-2">
      <p class="text-sm">
        {{ ulasan }}
      </p>
      <h2 class="font-semibold text-lg">{{ nama }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    imageAlt: String,
    ulasan: String,
    nama: String
  }
}
</script>
