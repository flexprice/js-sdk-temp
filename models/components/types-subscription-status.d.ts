import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesSubscriptionStatus: {
    readonly Active: "active";
    readonly Paused: "paused";
    readonly Cancelled: "cancelled";
    readonly Incomplete: "incomplete";
    readonly Trialing: "trialing";
    readonly Draft: "draft";
};
export type TypesSubscriptionStatus = ClosedEnum<typeof TypesSubscriptionStatus>;
/** @internal */
export declare const TypesSubscriptionStatus$inboundSchema: z.ZodNativeEnum<typeof TypesSubscriptionStatus>;
/** @internal */
export declare const TypesSubscriptionStatus$outboundSchema: z.ZodNativeEnum<typeof TypesSubscriptionStatus>;
//# sourceMappingURL=types-subscription-status.d.ts.map