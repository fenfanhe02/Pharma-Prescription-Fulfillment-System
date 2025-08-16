interface PrescriptionDrugs {
    drugId: string;
    dosage: number;
    expiry: string;
}

interface Prescription {
    id: string;
    patientId: string;
    pharmacyId: string;
    drugs: Array<PrescriptionDrugs>;
    status: 'PENDING' | 'FULFILLED';
}

export type {
  PrescriptionDrugs,
  Prescription,
}