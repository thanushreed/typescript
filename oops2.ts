class Dog
{
    age: number
    breed: string
    constructor(age: number, breed: string)
    {
        this.age = age
        this.breed = breed
    }
    getRelativeAge(): number
    {
        return this.age * 7
    }
}
let Spot = new Dog(2, 'Labrador')
console.log(Spot)