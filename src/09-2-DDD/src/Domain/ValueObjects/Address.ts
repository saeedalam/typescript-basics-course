export type Location = {
    lat: number,
    lon: number
}
export interface Address {
    zipcode: string,
    city: "Stockholm" | "Uppsala",
    street: string,
    location: Location
}