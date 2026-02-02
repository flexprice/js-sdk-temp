import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesBillingCycle: {
    readonly Anniversary: "anniversary";
    readonly Calendar: "calendar";
};
export type TypesBillingCycle = ClosedEnum<typeof TypesBillingCycle>;
/** @internal */
export declare const TypesBillingCycle$inboundSchema: z.ZodNativeEnum<typeof TypesBillingCycle>;
/** @internal */
export declare const TypesBillingCycle$outboundSchema: z.ZodNativeEnum<typeof TypesBillingCycle>;
//# sourceMappingURL=types-billing-cycle.d.ts.map