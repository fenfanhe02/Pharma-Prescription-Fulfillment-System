<template>
	<div class="container">
		<div class="title">View Audit Logs</div>
		<div class="table">
				<el-table :data="tableData" stripe style="width: 100%">
						<el-table-column prop="prescriptionId" label="Prescription Id" width="80" fixed />
						<el-table-column prop="patientId" label="Patient Id" width="180" />
						<el-table-column prop="pharmacyId" label="Pharmacy Id" show-overflow-tooltip/>
						<el-table-column prop="status" label="Status" />
						<el-table-column label="Status">
                <template #default="{ row }">
                    <el-tag :type="row.status === 'SUCCESS' ? 'success' : 'danger'">
												{{ row.status === 'SUCCESS' ? 'Success' : 'Failed' }}
                    </el-tag>
                </template>
            </el-table-column>
				</el-table>
			</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { logs } from '@/mock/logsData';

const tableData = ref(logs);
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