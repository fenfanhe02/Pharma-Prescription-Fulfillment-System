<template>
	<div class="container">
		<div class="title">Manage Prescriptions and Fulfillment</div>
		<div class="table">
				<el-table
						:data="tableData"
						stripe
						style="width: 100%">
						<el-table-column prop="id" label="Id" width="80" fixed />
						<el-table-column prop="patientId" label="Patient ID" width="180" show-overflow-tooltip/>
						<el-table-column prop="pharmacyId" label="Pharmacy ID" show-overflow-tooltip/>
						<el-table-column prop="status" label="Status" />
						<el-table-column fixed="right" label="Operations" min-width="120">
							<template #default="scope">
								<el-button type="primary" size="small" @click="handleFulFill" :disabled="scope.row.status === 'FULFILLED'">
									FulFill
								</el-button>
								<el-button size="small" @click="handleCheck(scope.row.pharmacyId)">
									Check
								</el-button>
							</template>
						</el-table-column>
				</el-table>
				<Dialog ref="dialogRef" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { prescription } from '@/mock/prescriptionData';
import Dialog from './components/Dialog.vue';

const tableData = ref(prescription);
const dialogRef = ref<InstanceType<typeof Dialog>>();
const handleFulFill = () => {
	// Logic to handle fulfillment, e.g., opening a dialog or navigating to a detail page
	console.log('Fulfill operation triggered');
};

const handleCheck = (id:string) => {
	dialogRef.value?.handleOpen(id); // Example pharmacyId, replace with actual logic
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