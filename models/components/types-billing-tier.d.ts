import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesBillingTier: {
    readonly Volume: "VOLUME";
    readonly Slab: "SLAB";
};
export type TypesBillingTier = ClosedEnum<typeof TypesBillingTier>;
/** @internal */
export declare const TypesBillingTier$inboundSchema: z.ZodNativeEnum<typeof TypesBillingTier>;
/** @internal */
export declare const TypesBillingTier$outboundSchema: z.ZodNativeEnum<typeof TypesBillingTier>;
//# sourceMappingURL=types-billing-tier.d.ts.map