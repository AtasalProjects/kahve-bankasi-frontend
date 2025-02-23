<script setup lang="ts">
import { useCategoryStore } from 'src/stores/category';
import { computed, onMounted, ref } from 'vue';

const tab = ref('');
const shopTabPanels = ref('');
const shopTabs = ref('');
const isTransitioning = ref(false);

const isMouseOverShopLink = ref(false);
const isMouseOverShopTabs = ref(false);

const categoryStore = useCategoryStore();

const productCategories = computed(() => {
  return categoryStore.categories.filter(
    (category) => category.name === 'coffee' || category.name === 'nuts'
  );
});

const hidden = ref(false);
const isScrolled = ref(false);
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

function handleMouseLeave() {
  if (!isTransitioning.value) {
    isMouseOverShopTabs.value = false;
  }
}

function handleMouseOnLink() {
  if (!isTransitioning.value) {
    shopTabPanels.value = 'shop-all-products';
    isMouseOverShopLink.value = true;
    isMouseOverShopTabs.value = true;
  }
}

function handleMouseLeaveFromLink() {
  if (!isTransitioning.value) {
    isMouseOverShopLink.value = false;
  }
}
</script>

<template>
  <div>
    <q-header
      :class="`${
        isScrolled && !isTransitioning ? 'bg-primary' : 'transparent'
      }  no-shadow q-px-lg q-py-none`"
      height-hint="100px"
      :bordered="
        !isTransitioning &&
        isScrolled &&
        !(shopTabPanels !== '' && (isMouseOverShopLink || isMouseOverShopTabs))
      "
      reveal
      @reveal="revealed"
      @mouseleave="
        handleMouseLeaveFromLink();
        handleMouseLeave();
      "
    >
      <q-toolbar
        class="flex no-wrap justify-between q-py-lg"
        :class="isTransitioning && isScrolled ? 'bg-primary' : ''"
      >
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
          <q-route-tab :ripple="false" name="home" label="Anasayfa" to="/" />
          <q-route-tab
            :ripple="false"
            name="about"
            label="Hakkımızda"
            to="/about"
          />
          <q-route-tab
            :ripple="false"
            name="shop-all-products"
            label="Ürünlerimiz"
            to="/shop/all"
            @mouseover="handleMouseOnLink"
            @mouseleave="handleMouseLeaveFromLink"
          />
        </q-tabs>
      </q-toolbar>

      <transition
        appear
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
        @before-enter="isTransitioning = true"
        @after-enter="isTransitioning = false"
        @before-leave="isTransitioning = true"
        @after-leave="isTransitioning = false"
      >
        <q-toolbar
          v-if="
            shopTabPanels !== '' && (isMouseOverShopLink || isMouseOverShopTabs)
          "
          @mouseleave="handleMouseLeave"
          class="flex no-wrap justify-center"
          :class="isScrolled ? 'bg-primary' : ''"
          :style="
            isScrolled
              ? 'border-top: 1px solid black; border-bottom: 1px solid black'
              : 'border-top: 1px solid white; border-bottom: 1px solid white'
          "
          inset
        >
          <q-tab-panels
            v-model="shopTabPanels"
            :class="
              isScrolled ? 'transparent text-black' : 'transparent text-white'
            "
          >
            <q-tab-panel name="shop-all-products">
              <q-tabs
                style="left: 50%; transform: translateX(-50%)"
                v-model="shopTabs"
                align="center"
                :breakpoint="0"
                no-caps
              >
                <q-route-tab
                  v-for="category in productCategories"
                  :key="category.id"
                  :ripple="false"
                  :name="category.name"
                  :label="category.description"
                  :to="`/shop/${category.name}`"
                />
              </q-tabs>
            </q-tab-panel>
          </q-tab-panels>
        </q-toolbar>
      </transition>
    </q-header>
  </div>
</template>
