<template>
  <h1>Header</h1>
  <NuxtLink to="/">Start</NuxtLink>
  <NuxtLink to="/about"> about</NuxtLink>
  <br />
  <br />
  <button @click="$router.push('/')">Start</button>
  <button @click="$router.push('/about')">About</button>
  Current route: <code>{{ route.path }}</code>
</template>
<script setup>
const route = useRoute();
</script>
