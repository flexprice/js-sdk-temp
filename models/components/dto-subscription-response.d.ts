import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoCouponAssociationResponse } from "./dto-coupon-association-response.js";
import { DtoCreditGrantResponse } from "./dto-credit-grant-response.js";
import { DtoCustomerResponse } from "./dto-customer-response.js";
import { DtoInvoiceResponse } from "./dto-invoice-response.js";
import { DtoPlanResponse } from "./dto-plan-response.js";
import { DtoSubscriptionPhaseResponse } from "./dto-subscription-phase-response.js";
import { SubscriptionSubscriptionLineItem } from "./subscription-subscription-line-item.js";
import { SubscriptionSubscriptionPause } from "./subscription-subscription-pause.js";
import { TypesBillingCadence } from "./types-billing-cadence.js";
import { TypesBillingCycle } from "./types-billing-cycle.js";
import { TypesBillingPeriod } from "./types-billing-period.js";
import { TypesPauseStatus } from "./types-pause-status.js";
import { TypesProrationBehavior } from "./types-proration-behavior.js";
import { TypesStatus } from "./types-status.js";
import { TypesSubscriptionStatus } from "./types-subscription-status.js";
export type DtoSubscriptionResponse = {
    /**
     * ActivePauseID references the current active pause configuration
     *
     * @remarks
     * This will be null if no pause is active or scheduled
     */
    activePauseId?: string | undefined;
    /**
     * BillingAnchor is the reference point that aligns future billing cycle dates.
     *
     * @remarks
     * It sets the day of week for week intervals, the day of month for month and year intervals,
     * and the month of year for year intervals. The timestamp is in UTC format.
     */
    billingAnchor?: string | undefined;
    billingCadence?: TypesBillingCadence | undefined;
    billingCycle?: TypesBillingCycle | undefined;
    billingPeriod?: TypesBillingPeriod | undefined;
    /**
     * BillingPeriodCount is the total number units of the billing period.
     */
    billingPeriodCount?: number | undefined;
    /**
     * CancelAt is the date the subscription will be canceled
     */
    cancelAt?: string | undefined;
    /**
     * CancelAtPeriodEnd is whether the subscription was canceled at the end of the current period
     */
    cancelAtPeriodEnd?: boolean | undefined;
    /**
     * CanceledAt is the date the subscription was canceled
     */
    cancelledAt?: string | undefined;
    /**
     * CollectionMethod determines how invoices are collected
     */
    collectionMethod?: string | undefined;
    /**
     * CommitmentAmount is the minimum amount a customer commits to paying for a billing period
     */
    commitmentAmount?: string | undefined;
    /**
     * CouponAssociations are the coupon associations for this subscription
     */
    couponAssociations?: Array<DtoCouponAssociationResponse> | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    /**
     * Credit grants are the credit grants for this subscription
     */
    creditGrants?: Array<DtoCreditGrantResponse> | undefined;
    /**
     * Currency is the currency of the subscription in lowercase 3 digit ISO codes
     */
    currency?: string | undefined;
    /**
     * CurrentPeriodEnd is the end of the current period that the subscription has been invoiced for.
     *
     * @remarks
     * At the end of this period, a new invoice will be created.
     */
    currentPeriodEnd?: string | undefined;
    /**
     * CurrentPeriodStart is the end of the current period that the subscription has been invoiced for.
     *
     * @remarks
     * At the end of this period, a new invoice will be created.
     */
    currentPeriodStart?: string | undefined;
    /**
     * Customer response object containing all customer information
     */
    customer?: DtoCustomerResponse | undefined;
    /**
     * CustomerID is the identifier for the customer in our system
     */
    customerId?: string | undefined;
    customerTimezone?: string | undefined;
    enableTrueUp?: boolean | undefined;
    /**
     * EndDate is the end date of the subscription
     */
    endDate?: string | undefined;
    /**
     * EnvironmentID is the environment identifier for the subscription
     */
    environmentId?: string | undefined;
    /**
     * GatewayPaymentMethodID is the gateway payment method ID for this subscription
     */
    gatewayPaymentMethodId?: string | undefined;
    /**
     * ID is the unique identifier for the subscription
     */
    id?: string | undefined;
    /**
     * InvoicingCustomerID is the customer ID to use for invoicing
     *
     * @remarks
     * This can differ from the subscription customer (e.g., parent company invoicing for child company)
     */
    invoicingCustomerId?: string | undefined;
    latestInvoice?: DtoInvoiceResponse | undefined;
    lineItems?: Array<SubscriptionSubscriptionLineItem> | undefined;
    /**
     * LookupKey is the key used to lookup the subscription in our system
     */
    lookupKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    /**
     * OverageFactor is a multiplier applied to usage beyond the commitment amount
     */
    overageFactor?: string | undefined;
    pauseStatus?: TypesPauseStatus | undefined;
    pauses?: Array<SubscriptionSubscriptionPause> | undefined;
    /**
     * PaymentBehavior determines how subscription payments are handled
     */
    paymentBehavior?: string | undefined;
    /**
     * Phases are the subscription phases for this subscription
     */
    phases?: Array<DtoSubscriptionPhaseResponse> | undefined;
    plan?: DtoPlanResponse | undefined;
    /**
     * PlanID is the identifier for the plan in our system
     */
    planId?: string | undefined;
    prorationBehavior?: TypesProrationBehavior | undefined;
    /**
     * StartDate is the start date of the subscription
     */
    startDate?: string | undefined;
    status?: TypesStatus | undefined;
    subscriptionStatus?: TypesSubscriptionStatus | undefined;
    tenantId?: string | undefined;
    /**
     * TrialEnd is the end date of the trial period
     */
    trialEnd?: string | undefined;
    /**
     * TrialStart is the start date of the trial period
     */
    trialStart?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
    /**
     * Version is used for optimistic locking
     */
    version?: number | undefined;
};
/** @internal */
export declare const DtoSubscriptionResponse$inboundSchema: z.ZodType<DtoSubscriptionResponse, z.ZodTypeDef, unknown>;
export declare function dtoSubscriptionResponseFromJSON(jsonString: string): SafeParseResult<DtoSubscriptionResponse, SDKValidationError>;
//# sourceMappingURL=dto-subscription-response.d.ts.map