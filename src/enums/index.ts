import { RoutePath } from '@/enums/route';

export enum metricStatus {
  STAGING = 'STAGING',
  PUBLISHED = 'PUBLISHED',
  // CERTIFIED = 'CERTIFIED',
  RETIRED = 'RETIRED',
}

export enum SettingsSideOption {
  LIST_ROLE = 'Role',
  LIST_USER = 'User',
  DIMENSION_MANAGEMENT = 'Dimension',
  DOMAIN_MANAGEMENT = 'Domain',
}

export const RouterSideBar = new Map([
  [RoutePath.ROLE, SettingsSideOption.LIST_ROLE],
  [RoutePath.USER, SettingsSideOption.LIST_USER],
  [RoutePath.DIMENSION, SettingsSideOption.DIMENSION_MANAGEMENT],
  [RoutePath.DOMAIN, SettingsSideOption.DOMAIN_MANAGEMENT],
]);

export const SideBarRouter = new Map([
  [SettingsSideOption.LIST_ROLE, RoutePath.ROLE],
  [SettingsSideOption.LIST_USER, RoutePath.USER],
  [SettingsSideOption.DIMENSION_MANAGEMENT, RoutePath.DIMENSION],
  [SettingsSideOption.DOMAIN_MANAGEMENT, RoutePath.DOMAIN],
]);