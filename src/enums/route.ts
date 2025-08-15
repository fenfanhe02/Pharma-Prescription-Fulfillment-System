export enum RoutePath {
  INDEX = '/',
  DRUGS = '/drugs',
}

export const RoutePathToNameMap = new Map(
  [
    [RoutePath.INDEX, 'index'],
    [RoutePath.DRUGS, 'drugs'],
  ]
)
