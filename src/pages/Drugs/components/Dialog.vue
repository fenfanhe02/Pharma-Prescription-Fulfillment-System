<template>
  <el-dialog v-model="dialogVisible" :title="title" width="600" :before-close="handleClose"
      :close-on-click-modal="false" :close-on-press-escape="false">
      <el-form ref="formRef" :model="formValue" :rules="rules" label-width="auto" status-icon size="default">
          <el-form-item label="Name" prop="name">
              <el-input v-model="formValue.name" placeholder="please input the name"/>
          </el-form-item>
          <el-form-item label="Manufacturer" prop="manufacturer">
              <el-input v-model="formValue.manufacturer" placeholder="please input the manufacturer"/>
          </el-form-item>
          <el-form-item label="Batch" prop="batch">
            <el-input v-model="formValue.batch" placeholder="please input the batch"/>
          </el-form-item>
          <el-form-item label="Expiry" prop="expiry">
              <el-date-picker v-model="formValue.expiry" type="date" label="choose date" placeholder="choose date"
                    style="width: 100%" :disabled-date="disabledDate"/>
          </el-form-item>
          <el-form-item label="Stock" prop="stock">
            <el-input v-model="formValue.stock" type="number" placeholder="please input the stock"/>
          </el-form-item>
          <el-form-item label="Limit" prop="limit">
              <el-input v-model="formValue.limit" type="number" placeholder="please input the limit"/>
          </el-form-item>
      </el-form>
      <template #footer>
          <div class="dialog-footer">
              <el-button @click="handleCancel">Cancel</el-button>
              <el-button type="primary" @click="handleSave">
                  Save
              </el-button>
          </div>
      </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ElMessage, FormInstance, FormRules } from 'element-plus';
import { ref } from 'vue';
import type { Drugs } from '@/interfaces/Drugs';
import { client } from '@/services/baseRequest';

const emit = defineEmits(['refresh']);
const dialogVisible = ref(false)
const title = ref<string>();
const handleClose = () => {
  dialogVisible.value = false
}
const formRef = ref<FormInstance>()
const formValue = ref<Drugs>({
} as Drugs);
const rules = ref<FormRules<Drugs>>({
  name: [
      { required: true, message: 'Please input the name', trigger: 'blur' }
  ],
  manufacturer: [
      { required: true, message: 'Please input the manufacturer', trigger: 'blur' }
  ],
  batch: [
      { required: true, message: 'Please input the batch', trigger: 'blur' }
  ],
  expiry: [
      { required: true, message: 'Please input the expiry', trigger: 'blur' }
  ],
  stock: [
      { required: true, message: 'Please input the stock', trigger: 'blur' },
      { validator: (rule, value:number, callback: (...args:any[])=>void) => {
          if (isNaN(Number(value))) {
              callback(new Error('Stock must be a number'));
          }
          if (value < 0) {
              callback(new Error('Stock cannot be negative'));
          }
          callback();
      }, trigger: ['blur', 'change'] }
  ],
  limit: [
      { required: true, message: 'Please input the limit', trigger: 'blur' },
      { validator: (rule, value:number, callback: (...args:any[])=>void) => {
          if (isNaN(Number(value))) {
              callback(new Error('Limit must be a number'));
          }
          if (value < 0) {
              callback(new Error('Limit cannot be negative'));
          }
          callback();
      }, trigger: ['blur', 'change'] }
  ]
});

const disabledDate = (time: Date) => {
  return time.getTime() < Date.now()
}

const handleOpen = () => {
    title.value = 'Add Drugs'
    dialogVisible.value = true
}

const handleSave = () => {
  formRef.value?.validate().then(valid => {
      if (valid) {
          new Promise((resolve, reject) => {
            resolve(true);
          }).then(() => {
            ElMessage({
                message: 'The drug has been added successfully',
                type: 'success',
            });
              formRef?.value?.resetFields();
              formValue.value = {} as Drugs;
              dialogVisible.value = false
              emit('refresh');
          }).catch(err => {
              ElMessage.error(err)
          })
      } else {
          return false;
      }
  })
}

const handleCancel = () => {
  formRef?.value?.resetFields();
  formValue.value = {} as Drugs;
  dialogVisible.value = false
}

defineExpose({
  handleOpen,
  handleClose
})
</script>

<style lang="scss" scoped></style>