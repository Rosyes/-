<template>
  <Header />

  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</template>

<script setup>
import Header from "@/components/Header/index.vue";
</script>
