export class Message {
    public headers: Map<string, string>;
    public payload: Uint8Array;

    constructor() {
        this.headers = new Map<string, string>();
        this.payload = new Uint8Array();
    }
}
