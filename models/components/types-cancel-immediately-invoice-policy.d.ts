import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesCancelImmediatelyInvoicePolicy: {
    readonly GenerateInvoice: "generate_invoice";
    readonly Skip: "skip";
};
export type TypesCancelImmediatelyInvoicePolicy = ClosedEnum<typeof TypesCancelImmediatelyInvoicePolicy>;
/** @internal */
export declare const TypesCancelImmediatelyInvoicePolicy$outboundSchema: z.ZodNativeEnum<typeof TypesCancelImmediatelyInvoicePolicy>;
//# sourceMappingURL=types-cancel-immediately-invoice-policy.d.ts.map