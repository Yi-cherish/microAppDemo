<template>
    <div>home</div>
    <input type="text">
    <img src="@/assets/audit_2.png" alt="">
    <img src="@/assets/carNotActive.png" alt="">
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();

console.log(route);
</script>
