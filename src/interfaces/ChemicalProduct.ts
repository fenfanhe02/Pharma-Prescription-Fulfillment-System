interface ChemicalProduct {
    productId?: number;
    productName: string;
    casNumber: string;
    molecularFormula: string;
    molecularWeight: number;
    hazardLevel: string;
    storageConditions: string;
    manufacturer: string;
    productionDate: string;
    expiryDate: string;
}

export type { ChemicalProduct };