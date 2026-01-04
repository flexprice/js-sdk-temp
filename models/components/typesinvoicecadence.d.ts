import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesInvoiceCadence: {
    readonly Arrear: "ARREAR";
    readonly Advance: "ADVANCE";
};
export type TypesInvoiceCadence = ClosedEnum<typeof TypesInvoiceCadence>;
/** @internal */
export declare const TypesInvoiceCadence$inboundSchema: z.ZodNativeEnum<typeof TypesInvoiceCadence>;
/** @internal */
export declare const TypesInvoiceCadence$outboundSchema: z.ZodNativeEnum<typeof TypesInvoiceCadence>;
//# sourceMappingURL=typesinvoicecadence.d.ts.map