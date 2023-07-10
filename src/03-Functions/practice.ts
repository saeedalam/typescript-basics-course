const strToNum = (str: string) => Number(str)
const numList = ["12", "345"].map(strToNum)
console.log(numList)

function summer(name: string, ...items: number[]) {
    const initialValue = 0;
    const sum = items.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
    console.log(`${name}'s Score : ${sum}`)
}

function summerB(name: string, ...items: number[]): number {
    let sum = 0;
    items.forEach(item => { sum += item })
    console.log(`${name}'s Score is  ${sum}`)
    return sum;
}

function summerC(name: string, ...items: number[]): number {
    let sum = 0;
    for (let item in items) {
        sum += items[item]
        //console.log(item  ,typeof item)
    }
    console.log(`${name}'s Score is  ${sum}`)
    return sum;
}

summer("Alex", 1, 2, 3)
summer("Adrian", 3, 4, 5, 6, 7)

summerB("Ali", 23, 34, 4, 5)

summerC("AliC", 23, 34, 4, 5)

// Type narrowing
type Fish = {
    swim: () => void
}
type Bird = {
    fly: () => void
}

function move(animal: Fish | Bird) {
    if ("swim" in animal) animal.swim()
    else animal.fly()
}

const Ghobad : Fish = {
    swim : () => console.log("I am a Fish")
}
move(Ghobad)

// ----