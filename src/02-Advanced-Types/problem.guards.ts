type DeliminatedDocument = {
    text: string;
    seperator: "comma" | "tab";
};

type PlaintextDocument = {
    text: string;
};

const printDeliminated = (doc: DeliminatedDocument) => {
    /* ... */
};

const printPlaintext = (doc: PlaintextDocument) => {
    /* ... */
};

const printDocument = (doc: DeliminatedDocument | PlaintextDocument) => {
    // if ("seperator" in doc) {
    //   printDeliminated(doc);
    // } else {
    //   printPlaintext(doc);
    // }
};

const printDocumentBroken = (doc: DeliminatedDocument | PlaintextDocument) => {
    /* 
    Argument of type 'DeliminatedDocument | PlaintextDocument' is not assignable to parameter of type 'DeliminatedDocument'.
    Property 'seperator' is missing in type 'PlaintextDocument' but required in type 'DeliminatedDocument'.ts(2345)
    */
    printDeliminated(doc);
};
