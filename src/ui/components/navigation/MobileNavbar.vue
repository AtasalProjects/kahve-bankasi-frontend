<script setup lang="ts">
import { onMounted, ref } from 'vue';

const drawer = ref(false);

const isScrolled = ref(false);
const hidden = ref(false);

const { transparentEffect } = defineProps({
  transparentEffect: { type: Boolean, default: true, required: false },
});

onMounted(() => {
  transparentEffect
    ? window.addEventListener('scroll', handleScroll)
    : (isScrolled.value = true);
});

function revealed() {
  hidden.value = !hidden.value;
}

function handleScroll() {
  isScrolled.value = window.scrollY > 700;
}

const menuList = [
  {
    icon: 'mdi-home',
    label: 'Anasayda',
    to: '/',
    separator: true,
  },
  {
    icon: 'mdi-information-outline',
    label: 'Hakkımızda',
    to: '/about',
    separator: false,
  },
  {
    icon: 'mdi-human-greeting-proximity',
    label: 'İletişim',
    to: '/contact',
    separator: false,
  },
];
</script>

<template>
  <div>
    <q-header
      :class="isScrolled ? 'bg-primary' : 'transparent'"
      class="text-grey-10"
      :bordered="isScrolled"
      reveal
      @reveal="revealed"
    >
      <q-toolbar>
        <q-toolbar-title>
          <img
            :src="`https://cdn.shopify.com/s/files/1/0466/2162/2429/files/Black-Fox-Coffee-Co-NYC-${
              isScrolled ? 'Black' : 'White'
            }.svg?v=1612653798`"
            style="max-width: 160px"
          />
        </q-toolbar-title>
        <q-btn flat @click="drawer = !drawer" round dense icon="mdi-menu" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      class="remove-top bg-grey-10 text-primary"
      :width="300"
      :breakpoint="400"
      overlay
      side="right"
    >
      <q-btn
        class="float-right"
        icon="mdi-close"
        size="xl"
        flat
        @click="drawer = false"
      ></q-btn>
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item
              clickable
              :active="menuItem.label === 'Outbox'"
              v-ripple
              :to="menuItem.to"
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
          <q-expansion-item
            expand-separator
            icon="mdi-store"
            label="Ürünlerimiz"
          >
            <q-item :inset-level="1" clickable v-ripple to="/shop/all">
              <q-item-section avatar>
                <q-icon name="mdi-table-of-contents" />
              </q-item-section>
              <q-item-section> Tüm Ürünler </q-item-section>
            </q-item>
            <q-item :inset-level="1" clickable v-ripple to="/shop/coffee">
              <q-item-section avatar>
                <q-icon name="mdi-coffee" />
              </q-item-section>
              <q-item-section> Kahveler </q-item-section>
            </q-item>
            <q-item :inset-level="1" clickable v-ripple to="/shop/cookie">
              <q-item-section avatar>
                <q-icon name="mdi-cookie" />
              </q-item-section>
              <q-item-section> Çerezler </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<style scoped>
::v-deep .q-drawer {
  top: 0 !important; /* Force override the top property */
}
</style>
