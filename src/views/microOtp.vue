<template>
    <micro-app
      :name="microName"
      :url="getUrl"
      iframe
      :baseroute="`/${microName}`"
      keep-alive
      fiber
      @datachange="handleDataChange"
    ></micro-app>
</template>
<script lang="ts">
import microApp from '@micro-zoe/micro-app';
import { defineComponent, onMounted, reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const storeInfo = ref({});

    const route = useRoute();
    const microName = 'microOtp';

    watch(route, (val) => {
      initPage();
    });

    microApp.getData(microName);

    const getUrl = ref('http://localhost:5174/');

    const initPage = () => {
      const routeInfo = microApp.router.current.get(microName);
      if (routeInfo && microApp.router.decode(route.path).includes(microName)) {
        if (`/#${route.path}` !== routeInfo.fullPath) {
          // 把nextTick改成setTimeout可解决再去登录的时候，停留在我上个账号最后访问的页面问题
          setTimeout(() => {
            microApp.router.push({ name: microName, path: `/#${route.fullPath}`, params: route.query || {} });
          });
        }
      }

      // 这里的一些参数除了重点说明的两个一般物流的项目都会有;
      storeInfo.value = {};
    };

    const handleDataChange = (val: any) => {
      
    };


    onMounted(() => {
      // 记得修改子应用 id
      microApp.setData(microName, { path: route.path, query: route.query || {} });
      initPage();
    });

    return {
      microName,
      storeInfo,
      getUrl,
      handleDataChange,
    };
  },
});
</script>
<style>
micro-app[name=microOtp] micro-app-body{
  min-height: 50vh !important;
}
</style>
