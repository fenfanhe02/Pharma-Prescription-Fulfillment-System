<template>
    <div class="container">
        <div class="title">
            <span>Manage Drugs</span>
        </div>
        <div style="width: 100%;">
            <el-button style="width: 80px; float: right; margin-right: 10px;" type="primary" @click="handleAddDrug">Add Drug</el-button>
        </div>
        <el-table class="table" stripe :data="tableData" style="width: 100%" :scroll-x="true">
            <el-table-column prop="id" label="Id" width="80" fixed />
            <el-table-column prop="name" label="Name" width="180" show-overflow-tooltip/>
            <el-table-column prop="manufacturer" label="Manufacturer" show-overflow-tooltip/>
            <el-table-column prop="batch" label="Batch" />
            <el-table-column prop="expiry" label="Expiry" />
            <el-table-column prop="stock" label="Stock" />
            <el-table-column prop="limit" label="Limit" />
            <el-table-column label="Is Expired">
                <template #default="{ row }">
                    <el-tag :type="isExpired(row.expiry) ? 'danger' : 'success'">
                        {{ isExpired(row.expiry) ? 'Expired' : 'Valid' }}
                    </el-tag>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <Dialog ref="dialogRef" @refresh="query"/>
</template>
  
<script setup lang="ts">
import { drugs} from '@/mock/drugsData';
import Dialog from './components/Dialog.vue';
import { ref } from 'vue';

const dialogRef = ref<InstanceType<typeof Dialog>>();
const tableData = drugs;
const query = () => {
  // Logic to refresh the table data, e.g., fetching from an API
  console.log('Data refreshed');
};

const isExpired = (expiryDate: string) => {
  return new Date(expiryDate) < new Date();
};

const handleAddDrug = () => {
  dialogRef.value?.handleOpen();
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: calc(100vw - 150px);

    .title {
        font-size: 24px;
        font-weight: bold;
        margin: 0 auto;
        margin-top: 10px;
    }

    .table {
        width: 100%;
        overflow-x: auto;
    }
}
</style>