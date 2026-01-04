import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const BillingCadence: {
    readonly Recurring: "RECURRING";
    readonly Onetime: "ONETIME";
};
export type BillingCadence = ClosedEnum<typeof BillingCadence>;
export declare const BillingPeriod: {
    readonly Monthly: "MONTHLY";
    readonly Annual: "ANNUAL";
    readonly Weekly: "WEEKLY";
    readonly Daily: "DAILY";
    readonly Quarterly: "QUARTERLY";
    readonly HalfYearly: "HALF_YEARLY";
};
export type BillingPeriod = ClosedEnum<typeof BillingPeriod>;
export declare const GetSubscriptionsOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type GetSubscriptionsOrder = ClosedEnum<typeof GetSubscriptionsOrder>;
export declare const GetSubscriptionsStatus: {
    readonly Published: "published";
    readonly Deleted: "deleted";
    readonly Archived: "archived";
};
export type GetSubscriptionsStatus = ClosedEnum<typeof GetSubscriptionsStatus>;
export declare const SubscriptionStatus: {
    readonly Active: "active";
    readonly Paused: "paused";
    readonly Cancelled: "cancelled";
    readonly Incomplete: "incomplete";
    readonly Trialing: "trialing";
    readonly Draft: "draft";
};
export type SubscriptionStatus = ClosedEnum<typeof SubscriptionStatus>;
export type GetSubscriptionsRequest = {
    /**
     * ActiveAt filters subscriptions that are active at the given time
     */
    activeAt?: string | undefined;
    /**
     * BillingCadence filters by billing cadence
     */
    billingCadence?: Array<BillingCadence> | undefined;
    /**
     * BillingPeriod filters by billing period
     */
    billingPeriod?: Array<BillingPeriod> | undefined;
    /**
     * CustomerID filters by customer ID
     */
    customerId?: string | undefined;
    endTime?: string | undefined;
    expand?: string | undefined;
    /**
     * ExternalCustomerID filters by external customer ID
     */
    externalCustomerId?: string | undefined;
    /**
     * InvoicingCustomerIDs filters by invoicing customer ID
     */
    invoicingCustomerIds?: Array<string> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: GetSubscriptionsOrder | undefined;
    /**
     * PlanID filters by plan ID
     */
    planId?: string | undefined;
    startTime?: string | undefined;
    status?: GetSubscriptionsStatus | undefined;
    subscriptionIds?: Array<string> | undefined;
    /**
     * SubscriptionStatus filters by subscription status
     */
    subscriptionStatus?: Array<SubscriptionStatus> | undefined;
    /**
     * WithLineItems includes line items in the response
     */
    withLineItems?: boolean | undefined;
};
/** @internal */
export declare const BillingCadence$outboundSchema: z.ZodNativeEnum<typeof BillingCadence>;
/** @internal */
export declare const BillingPeriod$outboundSchema: z.ZodNativeEnum<typeof BillingPeriod>;
/** @internal */
export declare const GetSubscriptionsOrder$outboundSchema: z.ZodNativeEnum<typeof GetSubscriptionsOrder>;
/** @internal */
export declare const GetSubscriptionsStatus$outboundSchema: z.ZodNativeEnum<typeof GetSubscriptionsStatus>;
/** @internal */
export declare const SubscriptionStatus$outboundSchema: z.ZodNativeEnum<typeof SubscriptionStatus>;
/** @internal */
export type GetSubscriptionsRequest$Outbound = {
    active_at?: string | undefined;
    billing_cadence?: Array<string> | undefined;
    billing_period?: Array<string> | undefined;
    customer_id?: string | undefined;
    end_time?: string | undefined;
    expand?: string | undefined;
    external_customer_id?: string | undefined;
    invoicing_customer_ids?: Array<string> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    plan_id?: string | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
    subscription_ids?: Array<string> | undefined;
    subscription_status?: Array<string> | undefined;
    with_line_items?: boolean | undefined;
};
/** @internal */
export declare const GetSubscriptionsRequest$outboundSchema: z.ZodType<GetSubscriptionsRequest$Outbound, z.ZodTypeDef, GetSubscriptionsRequest>;
export declare function getSubscriptionsRequestToJSON(getSubscriptionsRequest: GetSubscriptionsRequest): string;
//# sourceMappingURL=getsubscriptions.d.ts.map