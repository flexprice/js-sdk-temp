import * as z from "zod/v3";
import { TypesBillingCadence } from "./types-billing-cadence.js";
import { TypesBillingCycle } from "./types-billing-cycle.js";
import { TypesBillingPeriod } from "./types-billing-period.js";
import { TypesProrationBehavior } from "./types-proration-behavior.js";
import { TypesScheduleType } from "./types-schedule-type.js";
/**
 * Request object for changing a subscription plan (upgrade/downgrade)
 */
export type DtoSubscriptionChangeRequest = {
    billingCadence: TypesBillingCadence;
    billingCycle: TypesBillingCycle;
    billingPeriod: TypesBillingPeriod;
    /**
     * billing_period_count is the billing period count for the new subscription
     */
    billingPeriodCount?: number | undefined;
    changeAt?: TypesScheduleType | undefined;
    /**
     * metadata contains additional key-value pairs for storing extra information
     */
    metadata?: {
        [k: string]: string;
    } | undefined;
    prorationBehavior: TypesProrationBehavior;
    /**
     * target_plan_id is the ID of the new plan to change to (required)
     */
    targetPlanId: string;
};
/** @internal */
export type DtoSubscriptionChangeRequest$Outbound = {
    billing_cadence: string;
    billing_cycle: string;
    billing_period: string;
    billing_period_count?: number | undefined;
    change_at?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    proration_behavior: string;
    target_plan_id: string;
};
/** @internal */
export declare const DtoSubscriptionChangeRequest$outboundSchema: z.ZodType<DtoSubscriptionChangeRequest$Outbound, z.ZodTypeDef, DtoSubscriptionChangeRequest>;
export declare function dtoSubscriptionChangeRequestToJSON(dtoSubscriptionChangeRequest: DtoSubscriptionChangeRequest): string;
//# sourceMappingURL=dto-subscription-change-request.d.ts.map