interface Pharmacies {
  id: string;
  name: string;
}

interface AllocatedDrugs {
  drugId: string;
  drugName: string;
  limit: number;
}

export type {
  Pharmacies,
  AllocatedDrugs
}