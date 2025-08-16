import type { Logs } from '@/interfaces/Logs';

export const logs: Logs[] = [
  {
    prescriptionId: "RX123",
    patientId: "P001",
    pharmacyId: "PH001",
    status: "FAILED",
    drugsRequested: [
      { drugId: "D001", dosage: 400, quantity: 30 },
      { drugId: "D002", dosage: 500, quantity: 20 }
    ],
    drugsDispensed: [
      { drugId: "D002", dosage: 500, quantity: 15 } // Only partial fulfillment
    ],
    failureReasons: ["Drug expired", "Over allocation"]
  },
  {
    prescriptionId: "RX456",
    patientId: "P002",
    pharmacyId: "PH003",
    status: "FAILED",
    drugsRequested: [
      { drugId: "D003", dosage: 250, quantity: 10 },
      { drugId: "D005", dosage: 10, quantity: 60 }
    ],
    drugsDispensed: [], // Nothing dispensed
    failureReasons: ["Out of stock", "Prescription expired"]
  },
  {
    prescriptionId: "RX789",
    patientId: "P003",
    pharmacyId: "PH002",
    status: "FAILED",
    drugsRequested: [
      { drugId: "D004", dosage: 20, quantity: 90 },
      { drugId: "D007", dosage: 40, quantity: 30 }
    ],
    drugsDispensed: [
      { drugId: "D007", dosage: 40, quantity: 15 } // Partial fulfillment
    ],
    failureReasons: ["Insufficient stock", "Insurance rejection"]
  },
  {
    prescriptionId: "RX101",
    patientId: "P001",
    pharmacyId: "PH004",
    status: "FAILED",
    drugsRequested: [
      { drugId: "D008", dosage: 2, quantity: 100 },
      { drugId: "D009", dosage: 50, quantity: 30 }
    ],
    drugsDispensed: [], // Nothing dispensed
    failureReasons: ["Recall notice", "Dosage error"]
  },
  {
    prescriptionId: "RX112",
    patientId: "P004",
    pharmacyId: "PH005",
    status: "SUCCESS",
    drugsRequested: [
      { drugId: "D010", dosage: 40, quantity: 45 },
      { drugId: "D001", dosage: 200, quantity: 15 }
    ],
    drugsDispensed: [
      { drugId: "D010", dosage: 40, quantity: 45 },
      { drugId: "D001", dosage: 200, quantity: 15 }
    ],
    failureReasons: []
  }
];