<template>
  <div class="flex items-start py-10 border-b-2 border-black">
    <div class="w-[200px] h-[200px] bg-cover bg-center relative" :style="{ 'background-image': 'url(' + url + ')' }"></div>
    <div class="grid grid-cols-4 w-full items-start">
      <div class="px-5">
        <h2 class="font-bold text-xl">{{ title }}</h2>
        <p class="mt-5">{{ formatPrice(price) }}</p>
      </div>
      <div class="flex bg-gray-200 items-center w-fit p-2 justify-center">
        <svg @click="incrementValue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 cursor-pointer">
          <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
        <input name="quantity" type="number" v-model="inputValue" class="w-20 bg-inherit text-center appearance-none" />
        <svg @click="decrementValue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 cursor-pointer">
          <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <div class="">
        <p>{{ formatPrice(totalPrice) }}-</p>
      </div>
      <div class="flex justify-end">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-8 h-8">
          <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      inputValue: 0,
    };
  },
  methods: {
    incrementValue() {
      this.inputValue++;
    },
    decrementValue() {
      if (this.inputValue > 0) {
        this.inputValue--;
      }
    },
    formatPrice(value) {
      return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value);
    },
  },
};
</script>
