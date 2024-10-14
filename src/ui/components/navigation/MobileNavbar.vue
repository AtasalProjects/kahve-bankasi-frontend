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
    icon: 'mdi-inbox',
    label: 'Anasayda',
    separator: true,
  },
  {
    icon: 'mdi-information-outline',
    label: 'Hakkımızda',
    separator: false,
  },
];
</script>

<template>
  <div>
    <q-header
      class="bg-primary text-grey-10"
      elevated
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
      class="bg-grey-10 text-primary"
      show-if-above
      :width="300"
      :breakpoint="400"
      overlay
      side="right"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
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
            switch-toggle-side
            expand-separator
            icon="mdi-home"
            label="Mağazamız"
          >
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="mdi-store" />
              </q-item-section>
              <q-item-section> Mağazamız </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>
