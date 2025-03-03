<script setup lang="ts">
</script>

<template>
    <router-link to="/microOtp/home">Home</router-link> |
    <router-link to="/microOtp/about">About</router-link>
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route.name" />
    </router-view>
</template>

<style scoped>

</style>
