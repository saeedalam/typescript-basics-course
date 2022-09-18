function assertIsNumber(val: any): asserts val is number {
    if (typeof val !== "number") {
        throw new Error("Not a number!");
    }
}

export function double(input: any) {
    assertIsNumber(input);

    return input * 2;
}
