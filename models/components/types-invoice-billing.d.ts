import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesInvoiceBilling: {
    readonly InvoiceToParent: "invoice_to_parent";
    readonly InvoiceToSelf: "invoice_to_self";
};
export type TypesInvoiceBilling = ClosedEnum<typeof TypesInvoiceBilling>;
/** @internal */
export declare const TypesInvoiceBilling$outboundSchema: z.ZodNativeEnum<typeof TypesInvoiceBilling>;
//# sourceMappingURL=types-invoice-billing.d.ts.map