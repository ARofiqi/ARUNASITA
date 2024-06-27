<template>
  <router-link :to="{ name: 'ProdukDetail' }">
    <div class="flex flex-col border-[1px] border-gray-500 rounded-lg overflow-hidden">
      <div class="h-[440px] w-full bg-cover bg-center relative" :style="{ 'background-image': 'url(' + url + ')' }"></div>
      <div class="px-3 py-5 flex justify-between">
        <div>
          <h3 class="text-lg font-bold">{{ title }}</h3>
          <p class="text-sm">{{ formatPrice(price) }}</p>
        </div>
        <div class="flex items-end">
          <p class="underline">Beli Sekarang</p>
        </div>
      </div>
    </div>
  </router-link>
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
    price: {
      type: Number,
      required: true,
    },
  },
  methods: {
    formatPrice(price) {
      return "Rp" + this.formatNumber(price) + ",00- / Kg";
    },
    formatNumber(number) {
      return Number(number).toLocaleString("id-ID");
    },
  },
};
</script>

<style scoped></style>
