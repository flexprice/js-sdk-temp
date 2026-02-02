import * as z from "zod/v3";
import { DtoAddAddonToSubscriptionRequest, DtoAddAddonToSubscriptionRequest$Outbound } from "./dto-add-addon-to-subscription-request.js";
import { DtoCreateCreditGrantRequest, DtoCreateCreditGrantRequest$Outbound } from "./dto-create-credit-grant-request.js";
import { DtoLineItemCommitmentConfig, DtoLineItemCommitmentConfig$Outbound } from "./dto-line-item-commitment-config.js";
import { DtoOverrideEntitlementRequest, DtoOverrideEntitlementRequest$Outbound } from "./dto-override-entitlement-request.js";
import { DtoOverrideLineItemRequest, DtoOverrideLineItemRequest$Outbound } from "./dto-override-line-item-request.js";
import { DtoSubscriptionPhaseCreateRequest, DtoSubscriptionPhaseCreateRequest$Outbound } from "./dto-subscription-phase-create-request.js";
import { DtoTaxRateOverride, DtoTaxRateOverride$Outbound } from "./dto-tax-rate-override.js";
import { TypesBillingCadence } from "./types-billing-cadence.js";
import { TypesBillingCycle } from "./types-billing-cycle.js";
import { TypesBillingPeriod } from "./types-billing-period.js";
import { TypesCollectionMethod } from "./types-collection-method.js";
import { TypesInvoiceBilling } from "./types-invoice-billing.js";
import { TypesPaymentBehavior } from "./types-payment-behavior.js";
import { TypesProrationBehavior } from "./types-proration-behavior.js";
import { TypesSubscriptionStatus } from "./types-subscription-status.js";
export type DtoCreateSubscriptionRequest = {
    /**
     * Addons represents addons to be added to the subscription during creation
     */
    addons?: Array<DtoAddAddonToSubscriptionRequest> | undefined;
    billingCadence: TypesBillingCadence;
    billingCycle?: TypesBillingCycle | undefined;
    billingPeriod: TypesBillingPeriod;
    billingPeriodCount?: number | undefined;
    collectionMethod?: TypesCollectionMethod | undefined;
    /**
     * CommitmentAmount is the minimum amount a customer commits to paying for a billing period
     */
    commitmentAmount?: string | undefined;
    coupons?: Array<string> | undefined;
    /**
     * Credit grants to be applied when subscription is created
     */
    creditGrants?: Array<DtoCreateCreditGrantRequest> | undefined;
    currency: string;
    /**
     * customer_id is the flexprice customer id
     *
     * @remarks
     * and it is prioritized over external_customer_id in case both are provided.
     */
    customerId?: string | undefined;
    /**
     * Timezone of the customer.
     *
     * @remarks
     * If not set, the default value is UTC.
     */
    customerTimezone?: string | undefined;
    /**
     * Enable Commitment True Up Fee
     */
    enableTrueUp?: boolean | undefined;
    endDate?: string | undefined;
    /**
     * external_customer_id is the customer id in your DB
     *
     * @remarks
     * and must be same as what you provided as external_id while creating the customer in flexprice.
     */
    externalCustomerId?: string | undefined;
    gatewayPaymentMethodId?: string | undefined;
    invoiceBilling?: TypesInvoiceBilling | undefined;
    /**
     * LineItemCommitments allows setting commitment configuration per line item (keyed by price_id)
     */
    lineItemCommitments?: {
        [k: string]: DtoLineItemCommitmentConfig;
    } | undefined;
    lineItemCoupons?: {
        [k: string]: Array<string>;
    } | undefined;
    lookupKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    /**
     * OverageFactor is a multiplier applied to usage beyond the commitment amount
     */
    overageFactor?: string | undefined;
    /**
     * OverrideEntitlements allows customizing specific entitlements for this subscription
     */
    overrideEntitlements?: Array<DtoOverrideEntitlementRequest> | undefined;
    /**
     * OverrideLineItems allows customizing specific prices for this subscription
     */
    overrideLineItems?: Array<DtoOverrideLineItemRequest> | undefined;
    paymentBehavior?: TypesPaymentBehavior | undefined;
    /**
     * Phases represents subscription phases to be created with the subscription
     */
    phases?: Array<DtoSubscriptionPhaseCreateRequest> | undefined;
    planId: string;
    prorationBehavior?: TypesProrationBehavior | undefined;
    startDate?: string | undefined;
    subscriptionStatus?: TypesSubscriptionStatus | undefined;
    /**
     * tax_rate_overrides is the tax rate overrides	to be applied to the subscription
     */
    taxRateOverrides?: Array<DtoTaxRateOverride> | undefined;
    trialEnd?: string | undefined;
    trialStart?: string | undefined;
};
/** @internal */
export type DtoCreateSubscriptionRequest$Outbound = {
    addons?: Array<DtoAddAddonToSubscriptionRequest$Outbound> | undefined;
    billing_cadence: string;
    billing_cycle?: string | undefined;
    billing_period: string;
    billing_period_count?: number | undefined;
    collection_method?: string | undefined;
    commitment_amount?: string | undefined;
    coupons?: Array<string> | undefined;
    credit_grants?: Array<DtoCreateCreditGrantRequest$Outbound> | undefined;
    currency: string;
    customer_id?: string | undefined;
    customer_timezone?: string | undefined;
    enable_true_up?: boolean | undefined;
    end_date?: string | undefined;
    external_customer_id?: string | undefined;
    gateway_payment_method_id?: string | undefined;
    invoice_billing?: string | undefined;
    line_item_commitments?: {
        [k: string]: DtoLineItemCommitmentConfig$Outbound;
    } | undefined;
    line_item_coupons?: {
        [k: string]: Array<string>;
    } | undefined;
    lookup_key?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    overage_factor?: string | undefined;
    override_entitlements?: Array<DtoOverrideEntitlementRequest$Outbound> | undefined;
    override_line_items?: Array<DtoOverrideLineItemRequest$Outbound> | undefined;
    payment_behavior?: string | undefined;
    phases?: Array<DtoSubscriptionPhaseCreateRequest$Outbound> | undefined;
    plan_id: string;
    proration_behavior?: string | undefined;
    start_date?: string | undefined;
    subscription_status?: string | undefined;
    tax_rate_overrides?: Array<DtoTaxRateOverride$Outbound> | undefined;
    trial_end?: string | undefined;
    trial_start?: string | undefined;
};
/** @internal */
export declare const DtoCreateSubscriptionRequest$outboundSchema: z.ZodType<DtoCreateSubscriptionRequest$Outbound, z.ZodTypeDef, DtoCreateSubscriptionRequest>;
export declare function dtoCreateSubscriptionRequestToJSON(dtoCreateSubscriptionRequest: DtoCreateSubscriptionRequest): string;
//# sourceMappingURL=dto-create-subscription-request.d.ts.map