export type ScreenType = 'overview' | 'design' | 'performance' | 'camera' | 'shop';

export interface DeviceColor {
  id: string;
  name: string;
  hex: string;
  borderHex: string;
  description: string;
  image: string;
}

export interface DeviceModel {
  id: string;
  name: string;
  tagline: string;
  displaySize: string;
  startingPrice: number;
  monthlyPrice: number;
  specs: {
    display: string;
    chip: string;
    camera: string;
    battery: string;
    weight: string;
  };
}

export interface StorageOption {
  id: string;
  capacity: string;
  priceDelta: number;
}

export interface CartItem {
  id: string;
  model: DeviceModel;
  color: DeviceColor;
  storage: StorageOption;
  hasAppleCare: boolean;
  tradeInValue: number;
  tradeInModel?: string;
  totalPrice: number;
  monthlyPrice: number;
}
