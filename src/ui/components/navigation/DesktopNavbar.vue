<script setup lang="ts">
import { onMounted, ref } from 'vue';

const tab = ref('mails');

const hidden = ref(false);
const isScrolled = ref(false);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

function revealed() {
  hidden.value = !hidden.value;
}

function handleScroll() {
  isScrolled.value = window.scrollY > 700;
}
</script>

<template>
  <q-header
    :class="`${
      isScrolled ? 'bg-primary' : 'transparent'
    } no-shadow q-px-lg q-py-lg`"
    reveal
    :bordered="isScrolled"
    @reveal="revealed"
  >
    <q-toolbar class="flex no-wrap justify-between">
      <img
        :src="`https://cdn.shopify.com/s/files/1/0466/2162/2429/files/Black-Fox-Coffee-Co-NYC-${
          isScrolled ? 'Black' : 'White'
        }.svg?v=1612653798`"
        style="max-width: 160px"
      />

      <q-tabs
        :class="`${
          isScrolled ? 'transparent text-black' : 'transparent text-white'
        } no-shadow absolute`"
        style="left: 50%; transform: translateX(-50%)"
        v-model="tab"
        align="center"
        :breakpoint="0"
        no-caps
      >
        <q-tab :ripple="false" name="mails" label="Anasayfa" />
        <q-tab :ripple="false" name="alarms" label="Hakkımızda" />
      </q-tabs>

      <q-avatar color="red" text-color="white" icon="directions" />
    </q-toolbar>
  </q-header>
</template>
