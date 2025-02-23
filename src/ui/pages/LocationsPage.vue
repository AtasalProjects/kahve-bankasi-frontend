<script setup lang="ts">
import { mdiDirections } from '@quasar/extras/mdi-v6';
import { useContentStore } from 'src/stores/content';
import { computed } from 'vue';

const contentStore = useContentStore();

const location = computed(() => {
  const content = contentStore.getByCategory('location');
  return content && content.length > 0 ? content[0] : undefined;
});
</script>

<template>
  <q-page class="q-mb-xl full-height bg-primary text-center">
    <div class="container q-px-lg q-mb-xl">
      <h4 class="text-h3 text-apple-ls q-mb-lg q-mb-md-xl">Sizi Bekliyoruz</h4>
      <p
        :class="`${
          $q.screen.gt.md ? 'text-h4' : 'text-h5'
        } text-apple text-weight-regular text-grey-10`"
      >
        "Kahve zamanınızı daha keyifli hale getiren lezzetler sunarak, her
        yudumda unutulmaz anılar biriktirmenizi sağlıyoruz."
      </p>
    </div>
    <q-img
      src="~assets/images/about-s1.jpg"
      :ratio="$q.screen.gt.md ? '2.85' : '1.25'"
    >
      <div
        v-if="$q.screen.gt.md"
        class="absolute-top-left transparent text-subtitle2 q-ml-xl q-mt-xl"
      >
        <q-card
          v-if="location"
          class="bg-primary text-black text-left q-pa-md"
          style="width: 410px"
          square
        >
          <q-card-section>
            <p class="text-h4 text-apple-ls">{{ location.head2 }}</p>
            <div class="text-subtitle1 text-grey-10">
              {{ location?.body }}
            </div>
          </q-card-section>

          <q-card-section
            ><div class="text-grey-9">{{ location.body2 }}</div>
          </q-card-section>
          <q-card-section>
            <q-btn
              size="md"
              color="black"
              padding="md lg"
              :ripple="false"
              unelevated
              no-caps
              target="_blank"
              rel="noreferrer"
              :href="location.link || ''"
            >
              <div>Yol Tarifi</div>
              <q-icon right size="sm" :name="mdiDirections" />
            </q-btn>
          </q-card-section>
        </q-card>
      </div>
      <div v-else class="absolute-left transparent text-subtitle2">
        <q-card
          v-if="location"
          class="bg-primary text-black text-left q-pa-md"
          style="width: 303px"
          square
        >
          <q-card-section>
            <p class="text-h4 text-apple-ls">{{ location.head2 }}</p>
            <div class="text-subtitle1 text-grey-10">
              {{ location.body }}
            </div>
          </q-card-section>

          <q-card-section
            ><div class="text-grey-9">{{ location.body2 }}</div>
          </q-card-section>
          <q-card-section>
            <q-btn
              size="md"
              color="black"
              padding="md lg"
              :ripple="false"
              unelevated
              no-caps
              :to="location.link"
            >
              <div>Yol Tarifi</div>
              <q-icon right size="sm" :name="mdiDirections" />
            </q-btn>
          </q-card-section>
        </q-card>
      </div>
    </q-img>
  </q-page>
</template>
