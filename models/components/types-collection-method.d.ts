import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesCollectionMethod: {
    readonly ChargeAutomatically: "charge_automatically";
    readonly SendInvoice: "send_invoice";
};
export type TypesCollectionMethod = ClosedEnum<typeof TypesCollectionMethod>;
/** @internal */
export declare const TypesCollectionMethod$outboundSchema: z.ZodNativeEnum<typeof TypesCollectionMethod>;
//# sourceMappingURL=types-collection-method.d.ts.map