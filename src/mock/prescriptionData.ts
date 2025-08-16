import type {Prescription} from '@/interfaces/Prescription';

export const prescription:Prescription[] = [
  {
    id: "RX123",
    patientId: "P001",
    pharmacyId: "PH001",
    drugs: [
      { drugId: "D001", dosage: 400, expiry: "2024-12-31" },
      { drugId: "D002", dosage: 500, expiry: "2025-01-15" }
    ],
    status: "PENDING"
  },
  {
    id: "RX124",
    patientId: "P002",
    pharmacyId: "PH002",
    drugs: [
      { drugId: "D004", dosage: 20, expiry: "2024-11-30" },
      { drugId: "D005", dosage: 10, expiry: "2025-02-28" }
    ],
    status: "FULFILLED"
  },
  {
    id: "RX125",
    patientId: "P003",
    pharmacyId: "PH003",
    drugs: [
      { drugId: "D006", dosage: 1000, expiry: "2025-03-01" },
      { drugId: "D007", dosage: 20, expiry: "2025-04-15" }
    ],
    status: "FULFILLED"
  },
  {
    id: "RX126",
    patientId: "P001",
    pharmacyId: "PH004",
    drugs: [
      { drugId: "D008", dosage: 2, expiry: "2025-05-20" },
      { drugId: "D009", dosage: 50, expiry: "2025-06-30" }
    ],
    status: "PENDING"
  },
  {
    id: "RX127",
    patientId: "P004",
    pharmacyId: "PH005",
    drugs: [
      { drugId: "D010", dosage: 40, expiry: "2025-07-15" },
      { drugId: "D001", dosage: 200, expiry: "2025-08-01" }
    ],
    status: "PENDING"
  }
]