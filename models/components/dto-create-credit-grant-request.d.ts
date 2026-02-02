import * as z from "zod/v3";
import { TypesCreditGrantCadence } from "./types-credit-grant-cadence.js";
import { TypesCreditGrantExpiryDurationUnit } from "./types-credit-grant-expiry-duration-unit.js";
import { TypesCreditGrantExpiryType } from "./types-credit-grant-expiry-type.js";
import { TypesCreditGrantPeriod } from "./types-credit-grant-period.js";
import { TypesCreditGrantScope } from "./types-credit-grant-scope.js";
export type DtoCreateCreditGrantRequest = {
    cadence: TypesCreditGrantCadence;
    /**
     * amount in the currency =  number of credits * conversion_rate
     *
     * @remarks
     * ex if conversion_rate is 1, then 1 USD = 1 credit
     * ex if conversion_rate is 2, then 1 USD = 0.5 credits
     * ex if conversion_rate is 0.5, then 1 USD = 2 credits
     */
    conversionRate?: string | undefined;
    credits: string;
    expirationDuration?: number | undefined;
    expirationDurationUnit?: TypesCreditGrantExpiryDurationUnit | undefined;
    expirationType?: TypesCreditGrantExpiryType | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name: string;
    period?: TypesCreditGrantPeriod | undefined;
    periodCount?: number | undefined;
    planId?: string | undefined;
    priority?: number | undefined;
    scope: TypesCreditGrantScope;
    subscriptionId?: string | undefined;
    /**
     * topup_conversion_rate is the conversion rate for the topup to the currency
     *
     * @remarks
     * ex if topup_conversion_rate is 1, then 1 USD = 1 credit
     * ex if topup_conversion_rate is 2, then 1 USD = 0.5 credits
     * ex if topup_conversion_rate is 0.5, then 1 USD = 2 credits
     */
    topupConversionRate?: string | undefined;
};
/** @internal */
export type DtoCreateCreditGrantRequest$Outbound = {
    cadence: string;
    conversion_rate?: string | undefined;
    credits: string;
    expiration_duration?: number | undefined;
    expiration_duration_unit?: string | undefined;
    expiration_type?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name: string;
    period?: string | undefined;
    period_count?: number | undefined;
    plan_id?: string | undefined;
    priority?: number | undefined;
    scope: string;
    subscription_id?: string | undefined;
    topup_conversion_rate?: string | undefined;
};
/** @internal */
export declare const DtoCreateCreditGrantRequest$outboundSchema: z.ZodType<DtoCreateCreditGrantRequest$Outbound, z.ZodTypeDef, DtoCreateCreditGrantRequest>;
export declare function dtoCreateCreditGrantRequestToJSON(dtoCreateCreditGrantRequest: DtoCreateCreditGrantRequest): string;
//# sourceMappingURL=dto-create-credit-grant-request.d.ts.map