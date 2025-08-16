<template>
    <Header />
    <div class="container">
        <side-bar :menu="menu"></side-bar>
        <router-view />
    </div>
</template>

<script setup lang="ts">
import SideBar from './components/SideBar.vue'
import Header from './components/Header.vue'
import { menu } from '@/constants/menu'
import { useUserStore } from '@/store';
import { roleConvert } from '@/utils/index';

const userStore = useUserStore()
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    height: calc(100vh - 60px);

    .el-menu {
        width: 200px;
        height: 100%;
    }
}
</style>