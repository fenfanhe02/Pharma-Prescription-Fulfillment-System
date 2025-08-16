import type { Pharmacies, AllocatedDrugs } from '@/interfaces/Pharmacies';

export const pharmacies:Pharmacies[] = [
  {
    "id": "PH001",
    "name": "Chengdu Main Branch",
  },
  {
    "id": "PH002",
    "name": "Shanghai Central Pharmacy",
  },
  {
    "id": "PH003",
    "name": "Beijing Health Plus",
  },
  {
    "id": "PH004",
    "name": "Guangzhou South Pharmacy",
  },
  {
    "id": "PH005",
    "name": "Shenzhen Modern Pharmacy",
  }
];

export const allocatedDrugs:Array<{pharmacyId:string}&{drugs:AllocatedDrugs[]}> = [
  {
    "pharmacyId": "PH001",
    "drugs": [
      { "drugId": "D001", "drugName": "Ibuprofen", "limit": 200 },
      { "drugId": "D002", "drugName": "Acetaminophen", "limit": 100 },
      { "drugId": "D003", "drugName": "Amoxicillin", "limit": 150 }
    ]
  },
  {
    "pharmacyId": "PH002",
    "drugs": [
      { "drugId": "D001", "drugName": "Ibuprofen", "limit": 300 },
      { "drugId": "D004", "drugName": "Lisinopril", "limit": 180 },
      { "drugId": "D005", "drugName": "Atorvastatin", "limit": 200 }
    ]
  },
  {
    "pharmacyId": "PH003",
    "drugs": [
      { "drugId": "D002", "drugName": "Acetaminophen", "limit": 150 },
      { "drugId": "D006", "drugName": "Metformin", "limit": 250 },
      { "drugId": "D007", "drugName": "Omeprazole", "limit": 180 }
    ]
  },
  {
    "pharmacyId": "PH004",
    "drugs": [
      { "drugId": "D003", "drugName": "Amoxicillin", "limit": 100 },
      { "drugId": "D008", "drugName": "Albuterol", "limit": 120 },
      { "drugId": "D009", "drugName": "Sertraline", "limit": 150 }
    ]
  },
  {
    "pharmacyId": "PH005",
    "drugs": [
      { "drugId": "D004", "drugName": "Lisinopril", "limit": 200 },
      { "drugId": "D010", "drugName": "Simvastatin", "limit": 150 },
      { "drugId": "D011", "drugName": "Ciprofloxacin", "limit": 100 }
    ]
  }
];