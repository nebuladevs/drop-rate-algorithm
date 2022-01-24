export const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min)) + min
}

export const printMessage = (message: string): void => {
  console.log(`${message}\n`)
}
