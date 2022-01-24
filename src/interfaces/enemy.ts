import { ItemRarity } from './item'

export interface Enemy {
  name: string
  dropRate: number
  dropItemRarity: ItemRarity
}
