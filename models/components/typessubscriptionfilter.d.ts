import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { TypesBillingCadence } from "./typesbillingcadence.js";
import { TypesBillingPeriod } from "./typesbillingperiod.js";
import { TypesFilterCondition, TypesFilterCondition$Outbound } from "./typesfiltercondition.js";
import { TypesSortCondition, TypesSortCondition$Outbound } from "./typessortcondition.js";
import { TypesStatus } from "./typesstatus.js";
import { TypesSubscriptionStatus } from "./typessubscriptionstatus.js";
export declare const TypesSubscriptionFilterOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type TypesSubscriptionFilterOrder = ClosedEnum<typeof TypesSubscriptionFilterOrder>;
export type TypesSubscriptionFilter = {
    /**
     * ActiveAt filters subscriptions that are active at the given time
     */
    activeAt?: string | undefined;
    /**
     * BillingCadence filters by billing cadence
     */
    billingCadence?: Array<TypesBillingCadence> | undefined;
    /**
     * BillingPeriod filters by billing period
     */
    billingPeriod?: Array<TypesBillingPeriod> | undefined;
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
    filters?: Array<TypesFilterCondition> | undefined;
    /**
     * InvoicingCustomerIDs filters by invoicing customer ID
     */
    invoicingCustomerIds?: Array<string> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: TypesSubscriptionFilterOrder | undefined;
    /**
     * PlanID filters by plan ID
     */
    planId?: string | undefined;
    sort?: Array<TypesSortCondition> | undefined;
    startTime?: string | undefined;
    status?: TypesStatus | undefined;
    subscriptionIds?: Array<string> | undefined;
    /**
     * SubscriptionStatus filters by subscription status
     */
    subscriptionStatus?: Array<TypesSubscriptionStatus> | undefined;
    /**
     * WithLineItems includes line items in the response
     */
    withLineItems?: boolean | undefined;
};
/** @internal */
export declare const TypesSubscriptionFilterOrder$outboundSchema: z.ZodNativeEnum<typeof TypesSubscriptionFilterOrder>;
/** @internal */
export type TypesSubscriptionFilter$Outbound = {
    active_at?: string | undefined;
    billing_cadence?: Array<string> | undefined;
    billing_period?: Array<string> | undefined;
    customer_id?: string | undefined;
    end_time?: string | undefined;
    expand?: string | undefined;
    external_customer_id?: string | undefined;
    filters?: Array<TypesFilterCondition$Outbound> | undefined;
    invoicing_customer_ids?: Array<string> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    order?: string | undefined;
    plan_id?: string | undefined;
    sort?: Array<TypesSortCondition$Outbound> | undefined;
    start_time?: string | undefined;
    status?: string | undefined;
    subscription_ids?: Array<string> | undefined;
    subscription_status?: Array<string> | undefined;
    with_line_items?: boolean | undefined;
};
/** @internal */
export declare const TypesSubscriptionFilter$outboundSchema: z.ZodType<TypesSubscriptionFilter$Outbound, z.ZodTypeDef, TypesSubscriptionFilter>;
export declare function typesSubscriptionFilterToJSON(typesSubscriptionFilter: TypesSubscriptionFilter): string;
//# sourceMappingURL=typessubscriptionfilter.d.ts.map