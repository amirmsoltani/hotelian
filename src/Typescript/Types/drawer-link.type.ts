import {IconType} from "./icon.type";

export type DrawerLinkType = {
  label: string;
  icon_name?: string;
  icon_type?: IconType;
  clicked?: () => void;
};
