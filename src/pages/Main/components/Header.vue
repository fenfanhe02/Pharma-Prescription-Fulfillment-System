<template>
    <div class="header-container">
        <span class="title">重大危险源监测预警系统</span>
        <span class="user-text">欢迎 {{ props.role }}</span>
        <el-icon class="user-icon" :size="20" color="white">
            <User />
        </el-icon>
        <span class="exit-text" @click="handleExit">退出</span>
    </div>
</template>

<script setup lang="ts">
import { client } from '@/services/baseRequest';
import { User } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router'

interface Props {
    role: string;
}
const props = defineProps<Props>()

const router = useRouter()

const handleExit = () => {
    client.post('/logout').then(() => {
        router.push('/login')
        ElMessage.success('退出成功')
    }).catch(() => {
        ElMessage.error('退出失败')
    })
}
</script>

<style lang="scss" scoped>
.header-container {
    width: 100vw;
    height: 60px;
    background-color: rgb(0, 153, 238);

    .title {
        font-size: 20px;
        color: white;
        margin-left: 20px;
        line-height: 60px;
        font-weight: bold;
    }

    .user-icon {
        position: absolute;
        right: 60px;
        top: 20px;

        &:hover {
            cursor: pointer;
        }
    }

    .user-text {
        position: absolute;
        right: 100px;
        top: 20px;
        color: white;
        font-size: 16px;
    }

    .exit-text {
        position: absolute;
        right: 20px;
        top: 20px;
        color: white;
        font-size: 16px;

        &:hover {
            cursor: pointer;
        }
    }
}
</style>