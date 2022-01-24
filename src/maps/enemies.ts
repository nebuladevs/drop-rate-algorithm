import { Enemy } from '../interfaces/enemy'
import { ItemRarity } from '../interfaces/item'

export const enemies: Enemy[] = [
  {
    name: 'Scorpion',
    dropRate: 100,
    dropItemRarity: ItemRarity.COMMON,
  },
  {
    name: 'Warrior',
    dropRate: 50,
    dropItemRarity: ItemRarity.MYTHICAL,
  },
  {
    name: 'Heavy Warrior',
    dropRate: 20,
    dropItemRarity: ItemRarity.LEGENDARY,
  },
  {
    name: 'Boss Soldier',
    dropRate: 5,
    dropItemRarity: ItemRarity.DIVINE,
  },
]
