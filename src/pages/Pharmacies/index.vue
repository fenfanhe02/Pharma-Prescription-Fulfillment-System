<template>
	<div class="container">
		<div class="title">Manage Pharmacies</div>
		<div class="table">
				<el-table :data="tableData" stripe style="width: 100%" @row-click="handleRowClick">
						<el-table-column prop="id" label="Id" />
						<el-table-column prop="name" label="Name" show-overflow-tooltip/>
				</el-table>
		</div>
		<Dialog ref="dialogRef" />
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { pharmacies, allocatedDrugs } from '@/mock/pharmacyData';
import Dialog from './components/Dialog.vue';

const tableData = ref(pharmacies);
const handleRowClick = (row: any) => {
	dialogRef.value?.handleOpen(row.id);
};
const dialogRef = ref<InstanceType<typeof Dialog>>();
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