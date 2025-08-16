interface PrescriptionDrug {
  drugId: string;
  dosage: number;
  quantity?: number;
}

interface Logs {
  prescriptionId: string;
  patientId: string;
  pharmacyId: string;
  status: 'FAILED' | 'SUCCESS';
  drugsRequested: Array<PrescriptionDrug>;
  drugsDispensed: Array<PrescriptionDrug>;
  failureReasons: Array<string>;
}

export type { Logs, PrescriptionDrug };