import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesTaxRateType: {
    readonly Percentage: "percentage";
    readonly Fixed: "fixed";
};
export type TypesTaxRateType = ClosedEnum<typeof TypesTaxRateType>;
/** @internal */
export declare const TypesTaxRateType$inboundSchema: z.ZodNativeEnum<typeof TypesTaxRateType>;
/** @internal */
export declare const TypesTaxRateType$outboundSchema: z.ZodNativeEnum<typeof TypesTaxRateType>;
//# sourceMappingURL=types-tax-rate-type.d.ts.map