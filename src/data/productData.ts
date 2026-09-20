import { DeviceColor, DeviceModel, StorageOption } from '../types';

export const IMAGES = {
  heroFan: 'https://lh3.googleusercontent.com/aida/AP1WRLulQvHAe03EVmfv8Vsy8ZCbxSD_D7vQ4fbEad1LsgG12jiRWfU65kyoNgakoXvN2CFskjIKvjztM28cAIwPI2BlYRSeQ1yy1KGlyekHwJviFm3aTgK_AuG5N0ZAqRqiQy4XZKA5cOay6XkjCeCHiupWwBDgje9Dd0NO1Yf7LrpfpHNqr4HbbbSNSMvcSZlBJZA-L-5y2uFsUehrgSccVps40oudg2JQJcyGyOOSEZ8ogpDPCdbtK3sHbAY',
  displayHighlight: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnLVxd_c0Pbn7cmqPW07baW4Cynz9Jkt5czZ3GwGipOmHNlleV5dZ7R8AYy_3tqZVyibMrOhYRXE40w6CVMItNBusEQ62p9uX9vSEM5HHjGzcTrX0wjM9RlSFqFlampYaWlpBJ5jlsUu6WRERCvLuiHY5oieh7alvBK8rxGRB2_KI-jQRID289KHoUq7mfPcz3FuHmqa11cM3ZqOsxPSs9TwXuVAki8e7sSH_QSE2yNjgOzH6M5J_F',
  cameraHighlight: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxlxhZK3Xi0hHEmW1_Qim0yW9Ta_pII35WflnKrqgJ_aBfDfI4ee0A6-gF5JeD2CAqEYSt-ehrvRkxL6n2uP9-5Zs5YeBch5WmM0i8NMBTTIt1gZBiHArxlJkyhwLczycc5LfGgHlKE4iE6QIk2PX47Ey3mbWKXA1UZTbKvinWSNgaaFScsX3fsnw9lwaohJibw86qrF-T7j7YC2wjxImaziqMxvaP1oetVhogc7SlfKpW2jHaODdL',
  sleekProfile: 'https://lh3.googleusercontent.com/aida/AP1WRLs4B2wIB-ZV8K0IIq5WiFRUzuxWgiBs-MC1-hIfrn5OeIQY1KEjv9TvFM-0B57l545cbDCTzS_LDPOl0eIpjvvL8N0832ZSXfbEmNOKH1XXANuycc9dx9H0xQJwgpXVz89LB0dCRLXzgvl0Wgk9AS5RJpvmB4l4yLspq6MBYWVjg7vywwAY3VsSQFh1gLeaNMZJ3jQ5Ee4r6CNXWqvDSS1g5I3gaMYIw8Sev53L0687UoPZm_WZ8sZDpZs',
  centerStageSelfie: 'https://lh3.googleusercontent.com/aida/AP1WRLt-cQw3fsb1c9UAuU1AUv-vpR796zLZPmlMwHGST0P4FCXpQKeja-6rJCo7AZcOWO9tsdSI6qdFlnNxIJ2uK2V9rcvbSDcVkICTNOihfGxEXMRPL-4Wws_4TJS8aN-zjuAO_Un4UBuaZURwmGPas_cl_M0XnG81DWS2kLPrlIEet8EbOLZ0d-i00rZfZF0_2ib2aT8jUnKefkNXELzBHFIbfc1SwBPzmYhbW_SF3qoR1HKlMhlle8iowg',
  a19Chip: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBovpBDxlsGRhKY9oVB0lMaGvs6JDAanxCp4ruQSo9O9B2tKvSVakCSMfNHdgh5ytH7nJSYq7w9UegV0-FQb2ESs3AaHFmJvewd6XwPYzpH3LQMAT6QZN5RfWqvHsXZFf0EE-fQ4h5Rm_yfVMQGjlKb6xhBBRQKQk3HmI_M01Noewi2r_kjOa9hgyvHBCIWL0dOFn7z7pywZdOBZS8I-ssBHcy5--8meeycE0EMTl2xVZXaa4h6hD0j',
  batteryLineup: 'https://lh3.googleusercontent.com/aida/AEtjO1UFQP_bJDmmGqgC0TVdni2MxeQTwkp-8UABl0gI79lo2HpXqOEM76cxMG-ctselMHqIAm6Y4_BJ6Wfork-D2giFpWBHpcXAI8CiDePlY9ArlTUZjZBUZtFz7U2tPasGNtyq91sq1gVGqEFK3ItNdUoF-NIedBMLzI138vqxu_YYmhlAFIjiTNklHwbCBhjdEFOrK9swxxXodlQiIqlHAjY1Txxr6tEXFELnOavnEFmNghm-qzc',
  appleIntelligenceLock: 'https://lh3.googleusercontent.com/aida/AP1WRLuMef-jH_KdhRNtgC6IGgB8KT2NrOCk7Nxa23Alead8FIBiCL99irVA3yD9G3sfoKyHzpxPYJPbAwgbD5NBNYT4quzvviCmRPKITZW2YM9AjInyDKzkR_vK7FKVglVKO7kWz1mil1NC1fdlx7NOORX06Bzi7fEwpP9Xw_dvTBnsvC6qXpJ55q6toTBEbn-XDNO_G5Le5zio_SAlcugQcPFPARkrlslYBBDruixZPKPuWwBNjcUb-5UT49g',
  cameraHero: 'https://lh3.googleusercontent.com/aida/AEtjO1VQMtvsXePPFbvKP1t-6rvWij5TY2F0Cx6HsfQDAwd0H1Y2uw33JRaebFFVS8kalHxFHHnMMWLFwszXjZw6PYfs50IqCDEOxeUoSV_ku98zqFcfjZle9m_ZlrlJ-FvRyzFad507LzrNWF5bLKPPaJnZP-lw9mbhFaJBOn2e7Yk41nErw2V0T8Mke2_OOROT2mpc6J5YRVZyWLv-otIrKRokVBim27sR-S9OuDtom2v1E5_a7uW6CKuMt8w',
  photographicStyles: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9mf5KzJOmVsvPMAL1d_TpZdp2lIETe-RdXBVggS5MDv4xrqVoh9qSGE4rfRTPpgOwWM44oc0sa3-5DcFwIfZiJ6lXFJEgKCbKUt8getrBm_WuIef8kC_0JvEV6wzM-ajLL15IN5atLUVZi88DaN2KavSPqZu1drwCsYiTSJ3tr734cu8rwJuuYJ__-8XyNpaidvdXuUvumndguOhGV7tlLtnGRJDoA47F2NQWN5qySSQ-KASEEkLS',
  groupSelfieDemo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7rTS9k8sFSsAQbLmzqD5q5Bc8zbljbLMNVAljTz1aiSUn5ilxnBUwnCBlB23ouMkpHVObjrvzqMTLHhWzseNB83zNVD9tYiAy2MlZgmT3YA_vBo9QSRpCp_og1Goez4zfjkH0HblMoZWXotbDGF_Nk7ZYfMiUfIxcStUWzJLHWeyPqQ_OB1qAZuTF80_7W_yNB-VzpotGa2AXIDyeAfOBIMys9sLhO5vAxex1jdChpaaH0iHqkjw5',
  profileAvatar: 'https://lh3.googleusercontent.com/aida/AP1WRLtzI0NoC3O-QQDwZ49k_Vt194LU0KPolWwqP7aqPd5f4p3hNMakoliRbuEPB7QVgfG21fMUT1x_NQ6UmtFCrf_NfuM5a5ZmQP5vMKqPmobVH4PkZBaLUm8UXI15sJGF2E4G66lLA-LJ6nimwRml47g9Xrq3OmvewAuPtfhaJJN5ybJSBAusRNa8i8zCy1iqcVbOVRM46NKNu1Qr97VQo17BhfeKlh3FZCw_R2AgLxqO9VlIn8N-4TLWh-c',
};

export const DEVICE_COLORS: DeviceColor[] = [
  {
    id: 'lavender',
    name: 'Lavender Mist',
    hex: '#D7C4EB',
    borderHex: '#bfa7dc',
    description: 'A soft ethereal violet that reflects light with iridescent undertones.',
    image: IMAGES.heroFan,
  },
  {
    id: 'iceblue',
    name: 'Ice Blue',
    hex: '#A7C7E7',
    borderHex: '#8cb3dc',
    description: 'Crisp, cooling azure with subtle frosty pearlescence.',
    image: IMAGES.heroFan,
  },
  {
    id: 'sage',
    name: 'Sage Green',
    hex: '#A8BBA2',
    borderHex: '#8ca684',
    description: 'Earthy organic green with a matte satin finish.',
    image: IMAGES.heroFan,
  },
  {
    id: 'silver',
    name: 'Starlight Silver',
    hex: '#E5E4E2',
    borderHex: '#cccccc',
    description: 'Pure aerospace-grade aluminum with fine micro-blasted luster.',
    image: IMAGES.heroFan,
  },
  {
    id: 'spaceblack',
    name: 'Obsidian Black',
    hex: '#2B2B2C',
    borderHex: '#444446',
    description: 'Deep non-reflective dark titanium finish engineered to absorb glare.',
    image: IMAGES.heroFan,
  },
];

export const DEVICE_MODELS: DeviceModel[] = [
  {
    id: 'iphone-17',
    name: 'iPhone 17',
    tagline: 'Magichromatic. Pure delight.',
    displaySize: '6.1″ Super Retina XDR display with ProMotion 120Hz',
    startingPrice: 799,
    monthlyPrice: 33.29,
    specs: {
      display: '6.1-inch Super Retina XDR, ProMotion up to 120Hz',
      chip: 'A19 Bionic Chip (6-core CPU, 5-core GPU)',
      camera: '48MP Dual Fusion system with 2x Telephoto & 48MP Ultra Wide',
      battery: 'Up to 30 hours video playback',
      weight: '171 grams',
    },
  },
  {
    id: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    tagline: 'The ultimate titanium powerhouse.',
    displaySize: '6.3″ Super Retina XDR with Always-On display',
    startingPrice: 999,
    monthlyPrice: 41.62,
    specs: {
      display: '6.3-inch Super Retina XDR OLED, 3,000 nits peak',
      chip: 'A19 Pro Chip with Ray Tracing & Neural Engine',
      camera: '48MP Triple Pro system with 5x Telephoto & Center Stage',
      battery: 'Up to 33 hours video playback',
      weight: '188 grams',
    },
  },
  {
    id: 'iphone-17-promax',
    name: 'iPhone 17 Pro Max',
    tagline: 'Massive screen. Colossal battery life.',
    displaySize: '6.9″ Super Retina XDR with max viewable area',
    startingPrice: 1199,
    monthlyPrice: 49.95,
    specs: {
      display: '6.9-inch Super Retina XDR OLED, Ceramic Shield 2',
      chip: 'A19 Pro Chip with max thermal dissipation',
      camera: '48MP Triple Pro system with 10x Hybrid Telephoto',
      battery: 'Up to 38 hours video playback',
      weight: '221 grams',
    },
  },
];

export const STORAGE_OPTIONS: StorageOption[] = [
  { id: '128gb', capacity: '128GB', priceDelta: 0 },
  { id: '256gb', capacity: '256GB', priceDelta: 100 },
  { id: '512gb', capacity: '512GB', priceDelta: 300 },
  { id: '1tb', capacity: '1TB', priceDelta: 500 },
];

export const TRADE_IN_OPTIONS = [
  { model: 'iPhone 16 Pro Max', value: 650 },
  { model: 'iPhone 16 Pro', value: 540 },
  { model: 'iPhone 16 Plus', value: 420 },
  { model: 'iPhone 16', value: 380 },
  { model: 'iPhone 15 Pro', value: 400 },
  { model: 'iPhone 15', value: 300 },
  { model: 'iPhone 14 Pro', value: 280 },
  { model: 'No trade-in', value: 0 },
];
