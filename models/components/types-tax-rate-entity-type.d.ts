import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesTaxRateEntityType: {
    readonly Customer: "customer";
    readonly Subscription: "subscription";
    readonly Invoice: "invoice";
    readonly Tenant: "tenant";
};
export type TypesTaxRateEntityType = ClosedEnum<typeof TypesTaxRateEntityType>;
/** @internal */
export declare const TypesTaxRateEntityType$inboundSchema: z.ZodNativeEnum<typeof TypesTaxRateEntityType>;
/** @internal */
export declare const TypesTaxRateEntityType$outboundSchema: z.ZodNativeEnum<typeof TypesTaxRateEntityType>;
//# sourceMappingURL=types-tax-rate-entity-type.d.ts.map