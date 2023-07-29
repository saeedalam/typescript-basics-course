import { Price } from "../ValueObjects/Price"

export type VipEvent = Event & {
    price: Price
}