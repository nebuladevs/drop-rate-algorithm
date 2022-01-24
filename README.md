# Algoritmo para calcular o drop rate de itens

A base do algoritmo são duas entidades (Item e Enemy):

```typescript
export interface Enemy {
  name: string
  dropRate: number
  dropItemRarity: ItemRarity
}

export interface Item {
  name: string
  itemRarity: ItemRarity
}
```

O tipo ItemRarity é representado por um enum:

```typescript
export enum ItemRarity {
  COMMON = 100,
  UNCOMMON = 90,
  RARE = 50,
  MYTHICAL = 30,
  LEGENDARY = 20,
  ULTRA_RARE = 15,
  DIVINE = 5,
}
```

### Enemy

- Atributo `dropItemRarity` representa o nível de item que o inimigo pode dropar.
- Atributo `dropRate` é um valor inteiro de 0 à 100, e representa quanto de chance o jogador precisa para poder dropar um item.

### Item

- Atributo `itemRarity` representa o nível do item.

### Algoritmo

O algoritmo simula a morte de um monstro e o calculo de drop rate e item rarity para cada monstro.

Quando um inimigo é morto, o algoritmo gera um número aleatório entre 0-100. Esse valor será usado para checar se ele é menor ou igual ao drop rate do monstro. Ou seja, o drop rate do inimigo limita a quantidade de drop que o jogador pode conseguir ao matar ele.

Caso o jogador tire uma chance de drop menor ou igual ao drop rate do inimigo, o algoritmo começa a separar uma lista de itens que esse monstro pode dropar. Nesse nível é feito um loop entre todos os itens existentes, checando se o nível de raridade do Item é maior que o tipo de raridade que o inimigo pode dropar. Por ex:

- O inimigo pode dropar itens raros (valor 50), só vão entrar nessa lista de itens, os itens que possuem uma raridade maior, ou seja, os itens de tipo (RARE, UNCOMMON e COMMON). Quanto menor o nível de raridade, mais dificil é de dropar.

Com a lista de possíveis itens criada, é gerado um novo número aleatório de acordo com o tamanho dessa lista. E no final é devolvido um item aleatório dessa lista.

### Ideias

- Na hora de pegar um item aleatório da lista de possíveis itens, seria interessante de alguma forma checar o nível do player e usar isso como base na aleatoriedade do algoritmo.
