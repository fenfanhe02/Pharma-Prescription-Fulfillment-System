<template>
  <el-dialog v-model="dialogVisible" :title="title" width="1000" :before-close="handleClose"
      :close-on-click-modal="false" :close-on-press-escape="false">
      <el-table :data="tableData" stripe style="width: 100%">
						<el-table-column prop="drugId" label="Drug Id" />
						<el-table-column prop="drugName" label="Drug Name" show-overflow-tooltip/>
            <el-table-column prop="limit" label="Limit" />
				</el-table>
      <template #footer>
          <div class="dialog-footer">
              <el-button @click="handleCancel">Close</el-button>
          </div>
      </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ElMessage, FormInstance } from 'element-plus';
import { ref } from 'vue';
import type { Pharmacies, AllocatedDrugs } from '@/interfaces/Pharmacies';
import { allocatedDrugs } from '@/mock/pharmacyData';

const emit = defineEmits(['refresh']);
const dialogVisible = ref(false)
const title = ref<string>();
const handleClose = () => {
  dialogVisible.value = false
}
const formRef = ref<FormInstance>()
const tableData = ref<AllocatedDrugs[]>([]);

const handleOpen = (pharmacyId: string) => {
    title.value = 'Display Drugs'
    dialogVisible.value = true
    const record = allocatedDrugs.find(item => item.pharmacyId === pharmacyId);
    if (record) {
      tableData.value = record.drugs;
    } else {
      ElMessage.error('No drugs allocated to this pharmacy.');
    }
}

const handleCancel = () => {
  formRef?.value?.resetFields();
  tableData.value = [];
  dialogVisible.value = false
}

defineExpose({
  handleOpen,
  handleClose
})
</script>

<style lang="scss" scoped></style>