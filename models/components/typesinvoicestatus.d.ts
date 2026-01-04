import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesInvoiceStatus: {
    readonly Draft: "DRAFT";
    readonly Finalized: "FINALIZED";
    readonly Voided: "VOIDED";
};
export type TypesInvoiceStatus = ClosedEnum<typeof TypesInvoiceStatus>;
/** @internal */
export declare const TypesInvoiceStatus$inboundSchema: z.ZodNativeEnum<typeof TypesInvoiceStatus>;
/** @internal */
export declare const TypesInvoiceStatus$outboundSchema: z.ZodNativeEnum<typeof TypesInvoiceStatus>;
//# sourceMappingURL=typesinvoicestatus.d.ts.map