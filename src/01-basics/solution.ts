export const hello = "world"

export const addTwoNumbers = (a: number, b: number) => {
    return a + b
}

it("Should return sum of two numbers", () => {
    const result = addTwoNumbers(10, 20)
    expect(result).toBe(30)
})