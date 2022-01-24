export type FruitApi = Omit<Fruit,'amount'>
export type Fruit = {
    name: string,
    calories:string,
    carbohydrates: string,
    protein:string,
    fiber:string,
    blubber:string,
    portion:string,
    photo:string,
    price:number,
    amount:number
}