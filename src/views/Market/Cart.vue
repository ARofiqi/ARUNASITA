<template>
  <div>
    <Navbar />
    <div class="flex gap-5">
      <div class="pl-16 py-10 w-2/3">
        <div class="border-b-2 border-black pb-2">
          <h2>My Cart</h2>
        </div>
        <div>
          <CardProdukCart :title="'Tomat'" :price="2000" :totalPrice="20000" :url="'../../../public/produk/tomat.png'" />
          <CardProdukCart :title="'Cabai Rawit'" :price="5000" :totalPrice="60000" :url="'../../../public/produk/cabai-rawit.png'" />
        </div>
      </div>
      <div class="pr-16 py-10 w-1/3 flex flex-col gap-5">
        <div class="border-b-2 border-black pb-2">
          <h2>Order Summary</h2>
        </div>
        <div class="border-b-2 border-black py-4 flex justify-between">
          <h3>Subtotal</h3>
          <p class="font-semibold">{{ formatPrice(480000) }}</p>
        </div>
        <div class="">
          <h3>Total</h3>
          <p class="font-bold">{{ formatPrice(480000) }}</p>
        </div>
        <button class="px-6 py-3 bg-primary text-white hover:opacity-80 rounded">Checkout</button>
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

const formatPrice = (value) => {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value);
};
</script>

<style></style>
