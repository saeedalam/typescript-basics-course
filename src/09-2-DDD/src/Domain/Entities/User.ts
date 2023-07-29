export type Email = `${string}@${string}.${string}`

export type User = {
    idntifier: string,
    username: string,
    email: Email,
}