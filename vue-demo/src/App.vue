<script setup lang="ts">
</script>

<template>
    <!-- <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" :key="route.name" />
      </keep-alive>
    </router-view>
</template>

<style scoped>

</style>
