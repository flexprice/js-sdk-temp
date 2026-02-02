import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesBillingCadence: {
    readonly Recurring: "RECURRING";
    readonly Onetime: "ONETIME";
};
export type TypesBillingCadence = ClosedEnum<typeof TypesBillingCadence>;
/** @internal */
export declare const TypesBillingCadence$inboundSchema: z.ZodNativeEnum<typeof TypesBillingCadence>;
/** @internal */
export declare const TypesBillingCadence$outboundSchema: z.ZodNativeEnum<typeof TypesBillingCadence>;
//# sourceMappingURL=types-billing-cadence.d.ts.map