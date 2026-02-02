import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesTaxRateStatus: {
    readonly Active: "ACTIVE";
    readonly Inactive: "INACTIVE";
};
export type TypesTaxRateStatus = ClosedEnum<typeof TypesTaxRateStatus>;
/** @internal */
export declare const TypesTaxRateStatus$inboundSchema: z.ZodNativeEnum<typeof TypesTaxRateStatus>;
/** @internal */
export declare const TypesTaxRateStatus$outboundSchema: z.ZodNativeEnum<typeof TypesTaxRateStatus>;
//# sourceMappingURL=types-tax-rate-status.d.ts.map