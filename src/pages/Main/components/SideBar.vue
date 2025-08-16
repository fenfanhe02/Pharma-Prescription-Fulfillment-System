<template>
    <div class="container">
        <el-menu class="el-menu" @open="handleOpen" @close="handleClose" :unique-opened="true" :router="true" background-color="rgb(0, 102, 68)" text-color="white" active-text-color="white">
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
    width: 150px;

    .el-menu {
        width: 100%;
        height: 100%;
        
        .el-menu-item {
            height: auto;
            min-height: 56px;
            white-space: normal;
            line-height: 1.5;
            padding-top: 10px;
            padding-bottom: 10px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            
            span {
                word-break: break-word;
                overflow-wrap: break-word;
                width: 100%;
            }
        }
    }
}
</style>