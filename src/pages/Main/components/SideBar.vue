<template>
    <div class="container">
        <el-menu @open="handleOpen" @close="handleClose" :unique-opened="true" :router="true" background-color="rgb(0, 102, 68)" text-color="white" active-text-color="white">
            <el-menu-item v-for="(item,index) in props.menu" :key="index" :index="index.toString()" :route="item.path" class="menu-item">
                <span>{{item.title}}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { MenuItem } from '@/constants/menu'
import { useUserStore } from '@/store';

interface Props {
    menu: MenuItem[]
}

const props = defineProps<Props>()

const userStore = useUserStore()

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.container {
    height: 100vh;

    .el-menu {
        width: 150px;
        height: 100%;
    }

    .menu-item {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>