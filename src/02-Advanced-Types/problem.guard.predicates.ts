export type LineItem = {
    productId: number;
    quantity: number;
    discounted?: boolean;
    unitPrice: number;
};

export type FinalInvoice = {
    __typename: "FinalInvoice";
    insertedAt: string;
    invoiceNumber: string;
    customerId: number;
    approvedBy: number;
    lineItems: LineItem[];
};

export type DraftInvoice = {
    __typename: "DraftInvoice";
    insertedAt: string;
    invoiceNumber?: string;
    customerId?: number;
    approvedBy?: number;
    lineItems: LineItem[];
};

export type Invoice = FinalInvoice | DraftInvoice;

export const isFinalInvoice = (invoice: Invoice): invoice is FinalInvoice => {
    return invoice.__typename === "FinalInvoice";
};

export const isDraftInvoice = (invoice: Invoice): invoice is DraftInvoice => {
    return invoice.__typename === "DraftInvoice";
};

const invoice: Invoice = {
    __typename: "DraftInvoice",
    insertedAt: "2021-05-01",
    lineItems: []
};

isFinalInvoice(invoice);
