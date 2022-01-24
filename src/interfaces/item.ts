export enum ItemRarity {
  COMMON = 100,
  UNCOMMON = 90,
  RARE = 50,
  MYTHICAL = 30,
  LEGENDARY = 20,
  ULTRA_RARE = 15,
  DIVINE = 5,
}

export interface Item {
  name: string
  itemRarity: ItemRarity
}
