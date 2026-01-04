import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesInvoiceType: {
    readonly Subscription: "SUBSCRIPTION";
    readonly OneOff: "ONE_OFF";
    readonly Credit: "CREDIT";
};
export type TypesInvoiceType = ClosedEnum<typeof TypesInvoiceType>;
/** @internal */
export declare const TypesInvoiceType$inboundSchema: z.ZodNativeEnum<typeof TypesInvoiceType>;
/** @internal */
export declare const TypesInvoiceType$outboundSchema: z.ZodNativeEnum<typeof TypesInvoiceType>;
//# sourceMappingURL=typesinvoicetype.d.ts.map