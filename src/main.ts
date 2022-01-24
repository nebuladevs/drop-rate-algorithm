import { Item, ItemRarity } from './interfaces/item'
import { enemies } from './maps/enemies'
import { items } from './maps/items'
import { printMessage, random } from './utils'

const getRandomEnemy = () => {
  return enemies[random(0, enemies.length)]
}

const getRandomItem = (possibleItems: Item[]): Item => {
  const randomItemIndex = random(0, possibleItems.length)
  return possibleItems[randomItemIndex]
}

const fillPossibleItems = (enemyItemRarity: ItemRarity): Item[] => {
  const possibleItems = []

  for (const item of items) {
    if (item.itemRarity >= enemyItemRarity) {
      possibleItems.push(item)
    }
  }

  return possibleItems
}

const main = () => {
  const enemy = getRandomEnemy()

  printMessage('===== KILLED ENEMY =====')
  printMessage(`Name: ${enemy.name}`)
  printMessage(`Drop Rate: ${enemy.dropRate}`)
  printMessage(`Item Rarity: ${enemy.dropItemRarity}`)
  printMessage('========================')

  const dropChance = random(0, 100)

  if (dropChance <= enemy.dropRate) {
    const percentageToDrop = (100 * dropChance) / enemy.dropRate
    printMessage(`your drop chance is ${dropChance} and you have ${percentageToDrop}% chance to find an item...`)
    const possibleItems = fillPossibleItems(enemy.dropItemRarity)

    printMessage(`Possible Items to Drop: ${possibleItems.map((pItem) => pItem.name)}`)

    const randomItem = getRandomItem(possibleItems)
    printMessage('===== DROPPED ITEM =====')
    printMessage(`Name: ${randomItem.name}`)
    printMessage(`Rarity: ${randomItem.itemRarity}`)
    printMessage('========================')
  } else {
    printMessage(`your drop chance (${dropChance}) is greather than enemy drop rate ${enemy.dropRate}`)
    printMessage(`you have 0% chance to find an item...`)
    printMessage('drop nothing')
  }
}

main()
