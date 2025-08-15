interface Equipment {
    equipmentId?: number;
    equipmentName: string;
    equipmentType: string;
    designCapacity: string;
    maxOperatingPressure: string;
    maxOperatingTemperature: string;
    agitationMethod: string;
    agitationSpeedRange: string;
    reactionTemperatureRange: string;
    reactionPressureRange: string;
    reactionTimeRange: string;
    reactionMaterialRatio: string;
}

export type { Equipment };