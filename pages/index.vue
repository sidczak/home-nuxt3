<template>
  <div>
    <h1>Welcome to the homepage {{ $t("welcome") }} {{ $t("pages.about") }}</h1>
    <AppAlert> This is an auto-imported component </AppAlert>
    <font-awesome-icon icon="fa-solid fa-user-secret" />
    <font-awesome-icon icon="fa-solid fa-user" />
    <font-awesome-icon icon="fa-brands fa-symfony" />
    <font-awesome-icon icon="fa-regular fa-user" />
    <!-- <div v-if="pending">Lodaing...</div>
    <div v-else>river: *{{ river.title }}*</div> -->

    <!-- <div v-if="pending">Loading rivers ...</div>
    <div v-else>
      <div v-for="river in rivers">
        {{ river.title }}
      </div>
    </div> -->

    <!-- <div v-if="pending">Loading...</div>
    <div v-else>mountain: *{{ mountain.title }}*</div> -->

    <!-- <div v-if="pending">Loading mountains ...</div>
    <div v-else>
      <div v-for="mountain in mountains">{{ mountain.title }}</div>
    </div> -->
  </div>
</template>
<script setup>
// const { pending, data: river } = await useFetch(
//   "https://api.nuxtjs.dev/rivers/amazon-river"
// );

// const { pending, data: rivers } = useLazyFetch("https://api.nuxtjs.dev/rivers");

// const { pending, data: mountain } = await useAsyncData(() =>
//   $fetch("https://api.nuxtjs.dev/mountains/aconcagua")
// );

// const { pending, data: mountains } = useLazyAsyncData("mountains", () =>
//   $fetch("https://api.nuxtjs.dev/mountains")
// );
</script>
