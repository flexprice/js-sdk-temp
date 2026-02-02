import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesSubscriptionScheduleChangeType: {
    readonly PlanChange: "plan_change";
    readonly Cancellation: "cancellation";
};
export type TypesSubscriptionScheduleChangeType = ClosedEnum<typeof TypesSubscriptionScheduleChangeType>;
/** @internal */
export declare const TypesSubscriptionScheduleChangeType$inboundSchema: z.ZodNativeEnum<typeof TypesSubscriptionScheduleChangeType>;
/** @internal */
export declare const TypesSubscriptionScheduleChangeType$outboundSchema: z.ZodNativeEnum<typeof TypesSubscriptionScheduleChangeType>;
//# sourceMappingURL=types-subscription-schedule-change-type.d.ts.map