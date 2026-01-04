import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesTaxRateScope: {
    readonly Internal: "INTERNAL";
    readonly External: "EXTERNAL";
    readonly Onetime: "ONETIME";
};
export type TypesTaxRateScope = ClosedEnum<typeof TypesTaxRateScope>;
/** @internal */
export declare const TypesTaxRateScope$inboundSchema: z.ZodNativeEnum<typeof TypesTaxRateScope>;
/** @internal */
export declare const TypesTaxRateScope$outboundSchema: z.ZodNativeEnum<typeof TypesTaxRateScope>;
//# sourceMappingURL=typestaxratescope.d.ts.map