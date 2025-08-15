# Challenge: Pharma Prescription Fulfillment Frontend System

## Overview

You are tasked with building the frontend interface of a **Pharma Prescription Fulfillment System**. This system is designed for **pharmacy staff** to manage prescriptions, drugs, pharmacies, and audit logs. The backend is not provided — all API interactions must be **mocked using realistic data**.

The goal is to build a maintainable, modular web application that covers core functionality and meets business logic requirements. You are free to choose your **UI library** (e.g., Vant, Element Plus, Vuetify), but must use **Vue 3 + TypeScript**, and demonstrate **form validation**, **state management**, **error handling**, and **testing discipline**.

---

## Functional Stories

### 1. 📦 Manage Drugs

**Goal**: View and add drugs to the inventory

**Acceptance Criteria:**

- **Given** I open the Drug Management page  
  **When** the page loads  
  **Then** I should see a list of all drugs with fields: ID, name, limit (per pharmacy), manufacturer, batch, expiry, and stock

- **Given** a drug is expired  
  **When** it's displayed  
  **Then** it should be visually marked as expired

- **Given** I fill the "Add Drug" form  
  **When** all fields are valid and submitted  
  **Then** the drug is added to the list and success message shown

- **Given** any form field is invalid  
  **When** I attempt to submit  
  **Then** I see inline validation errors and submission is blocked

**API Reference:**

- `GET /drugs` – get list of all drugs  
- `POST /drugs` – add a new drug

---

### 2. 🏥 Manage Pharmacies

**Goal**: View pharmacy information and their allocated drugs

**Acceptance Criteria:**

- **Given** I load the Pharmacy Management page  
  **When** it renders  
  **Then** I should see a list of pharmacies with name and ID

- **Given** I click a pharmacy  
  **When** the detail page opens  
  **Then** I should see:
  - Pharmacy name and ID
  - A table of contracted drugs, showing:
    - Drug name
    - Drug ID
    - Allocated limit (e.g., 200 units)

**API Reference:**

- `GET /pharmacies` – list of all pharmacies  
- `GET /pharmacies/:id` – get pharmacy detail and list of allocated drugs

---

### 3. 💊 Manage Prescriptions and Fulfillment

**Goal**: View, validate, and fulfill prescriptions

**Acceptance Criteria:**

- **Given** I view the prescription dashboard  
  **When** the list is loaded  
  **Then** I see prescription ID, patient name, and status

- **Given** I open a prescription  
  **When** the detail is shown  
  **Then** I see all requested drugs with allocation and expiry checks

- **Given** all drugs are valid  
  **When** I click "Fulfill"  
  **Then** the API is called and the prescription is marked as fulfilled

- **Given** some drugs are invalid  
  **When** I try to fulfill  
  **Then** I see error messages and fulfillment is blocked

**API Reference:**

- `GET /prescriptions`  
- `GET /prescriptions/:id`  
- `POST /prescriptions/:id/fulfill`

---

### 4. 📑 View Audit Logs

**Goal**: Inspect past prescription processing attempts

**Acceptance Criteria:**

- **Given** I view the audit log page  
  **When** it loads  
  **Then** I see a table of logs with prescription ID, patient ID, pharmacy ID, and status

- **Given** I apply a filter  
  **When** I choose patient/pharmacy/success  
  **Then** the results are filtered accordingly

- **Given** I click a row  
  **When** log details appear  
  **Then** I see requested drugs, dispensed drugs, and failure reasons

**API Reference:**

- `GET /audit-logs` – list with filters

---

## Mock Data Schemas

### Drug
```json
{
  "id": "D001",
  "name": "Ibuprofen",
  "manufacturer": "ACME Pharma",
  "batch": "B202403",
  "expiry": "2026-01-01",
  "stock": 150,
  "limit": 200
}
```

### Pharmacy
```json
{
  "id": "PH001",
  "name": "Chengdu Main Branch",
  "allocatedDrugs": [
    { "drugId": "D001", "drugName": "Ibuprofen", "limit": 200 },
    { "drugId": "D002", "drugName": "Paracetamol", "limit": 100 }
  ]
}
```

### Prescription
```json
{
  "id": "RX123",
  "patientId": "P001",
  "pharmacyId": "PH001",
  "drugs": [
    { "drugId": "D001", "dosage": 400 },
    { "drugId": "D002", "dosage": 500 }
  ],
  "status": "PENDING"
}
```

### Fulfillment Response
```json
{ "success": true }
// or
{
  "success": false,
  "errors": [
    "Drug D002 is expired",
    "Drug D001 exceeds pharmacy allocation"
  ]
}
```

### Audit Log
```json
{
  "prescriptionId": "RX123",
  "patientId": "P001",
  "pharmacyId": "PH001",
  "status": "FAILED",
  "drugsRequested": [...],
  "drugsDispensed": [...],
  "failureReasons": ["Drug expired", "Over allocation"]
}
```

---

## Technical Expectations

| Area           | Expectation |
|----------------|-------------|
| Framework      | Vue 3 + TypeScript |
| UI Library     | Any (Vant, Element Plus, Vuetify, etc.) |
| State          | Vuex or Pinia |
| Validation     | Field-level + business rules |
| Testing        | Unit tests for core logic (Jest + Vue Test Utils) |
| Mocking        | Mock all endpoints with realistic behavior |
| Linting        | ESLint + Prettier configured |
| Documentation  | README includes setup, mock info, assumptions |
| Git            | Clear commit history, readable project layout |

---

## Submission Instructions

- Push code to a **public GitHub repository**
- Include a working `README.md` with:
  - Setup instructions
  - How to run mock server
  - Scripts: `npm run dev`, `npm run test`, `npm run lint`
  - Known assumptions