<template lang="pug">
template(v-if="!$colorMode.unknown")
  div.bg-clouds-concave-145
    | bg-clouds-concave-145
  h1 
    | Color mode: {{ $colorMode.value }}
  select(v-model="$colorMode.preference")
    option(value="system")
      | System
    option(value="light")
      | Light
    option(value="dark")
      | Dark
    option(value="sepia")
      | Sepia

  NuxtLink(v-for="(locale, index) in $i18n.locales" :key="index" :to="switchLocalePath(locale.code)")
    | {{locale.name}}

  AppHeader
  slot
  AppFooter.red
</template>
<style lang="scss" scoped>
.red {
  border: 1px solid $turquoise;
}
</style>
