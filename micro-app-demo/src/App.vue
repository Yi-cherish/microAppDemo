<script setup lang="ts">
import { useRouter } from "vue-router"
import microApp from '@micro-zoe/micro-app';

const router = useRouter()
const onClick = (path) => {
  // router.push('/microOtp/home')
  // router.push('/microOtp/about')
  microApp.router.push({ name: 'microOtp', path: `/#/microOtp/${path}` });
}
</script>

<template>
    <!-- <router-link to="/microOtp/home">Home</router-link> | -->
    <!-- <router-link to="/microOtp/about">About</router-link> -->
    <div>
      <span @click="onClick('home')">Home</span> /
      <span @click="onClick('about')">About</span>
    </div>
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route.name" />
    </router-view>
</template>

<style scoped>

</style>
