<template>
  <div>
    <Navbar />
    <div class="flex gap-5">
      <div class="pl-16 py-10 w-2/3">
        <div class="border-b-2 border-black pb-2">
          <h2>My Cart</h2>
        </div>
        <div>
          <div class="flex items-start py-10 border-b-2 border-black">
            <div class="w-[200px] h-[200px] bg-cover bg-center" :style="{ 'background-image': 'url(\'./produk/wortel.png\')' }"></div>
            <div class="grid grid-cols-4 w-full items-start">
              <div class="px-5">
                <h2 class="font-bold text-xl">Wortel</h2>
                <p class="mt-5">Rp.16.000 / Kg</p>
              </div>
              <div class="flex bg-gray-200 items-center w-fit p-2 justify-center">
                <svg @click="decrementValue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 cursor-pointer">
                  <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                </svg>
                <input type="number" v-model="inputValue" class="w-20 bg-inherit text-center appearance-none" />
                <svg @click="incrementValue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5 cursor-pointer">
                  <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </div>
              <div class="">
                <p>Rp.80.000.00-</p>
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
          <CardProdukCart :title="'Wortel'" :price="2000" :totalPrice="20000" />
        </div>
      </div>
      <div class="pr-16 py-10 w-1/3">
        <div class="border-b-2 border-black pb-2">
          <h2>Order Summary</h2>
        </div>
        <div class="border-b-2 border-black py-4 flex justify-between">
          <h3>Subtotal</h3>
          <p class="font-semibold">Rp.480.000.00-</p>
        </div>
        <div class="">
          <h3>Total</h3>
          <p class="font-bold">Rp.480.000.00-</p>
        </div>
        <div>
          <button class="px-6 py-3 bg-primary text-white hover:opacity-80 rounded">Checkout</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "@components/Navbar.vue";
import Footer from "@components/Footer.vue";
import CardProdukCart from "@components/CardProdukCart.vue";

const inputValue = ref(0);

const incrementValue = () => {
  inputValue.value++;
};

const decrementValue = () => {
  if (inputValue.value > 0) {
    inputValue.value--;
  }
};
</script>

<style></style>
