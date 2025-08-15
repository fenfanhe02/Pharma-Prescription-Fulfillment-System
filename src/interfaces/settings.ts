import { SettingsSideOption } from "@/enums";

export interface ItemType {
  title: string;
  subTitle: Array<string>;
}

export interface SideBarProps {
  items: Array<ItemType>;
  onChange?: (selectedItem: SettingsSideOption)=>void;
}

export interface DomainListResponse {
  id: string;
  name: string;
  description: string;
}
