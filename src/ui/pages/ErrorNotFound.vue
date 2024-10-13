<script setup lang="ts">
defineOptions({
  name: 'ErrorNotFound',
});
</script>

<template>
  <div
    class="fullscreen bg-primary text-grey-9 text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2 text-apple-ls" style="opacity: 0.4">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="secondary"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>
