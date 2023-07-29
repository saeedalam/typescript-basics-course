import { BaseException } from "./BaseEsxption";

export class EventValidationException extends BaseException {
    constructor(message: string) {
        super(message, 400);
    }
}
