export enum RoutePath {
  INDEX = '/',
  DRUGS = '/drugs',
  PHARMACIES = '/pharmacies',
  PRESCRIPTIONS = '/prescriptions',
  LOGS = '/logs',
}

export const RoutePathToNameMap = new Map(
  [
    [RoutePath.INDEX, 'index'],
    [RoutePath.DRUGS, 'drugs'],
    [RoutePath.PHARMACIES, 'pharmacies'],
    [RoutePath.PRESCRIPTIONS, 'prescriptions'],
    [RoutePath.LOGS, 'logs'],
  ]
)
