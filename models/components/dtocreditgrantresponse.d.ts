import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesCreditGrantCadence } from "./typescreditgrantcadence.js";
import { TypesCreditGrantExpiryDurationUnit } from "./typescreditgrantexpirydurationunit.js";
import { TypesCreditGrantExpiryType } from "./typescreditgrantexpirytype.js";
import { TypesCreditGrantPeriod } from "./typescreditgrantperiod.js";
import { TypesCreditGrantScope } from "./typescreditgrantscope.js";
import { TypesStatus } from "./typesstatus.js";
export type DtoCreditGrantResponse = {
    cadence?: TypesCreditGrantCadence | undefined;
    /**
     * amount in the currency =  number of credits * conversion_rate
     *
     * @remarks
     * ex if conversion_rate is 1, then 1 USD = 1 credit
     * ex if conversion_rate is 2, then 1 USD = 0.5 credits
     * ex if conversion_rate is 0.5, then 1 USD = 2 credits
     */
    conversionRate?: string | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    creditGrantAnchor?: string | undefined;
    credits?: string | undefined;
    endDate?: string | undefined;
    environmentId?: string | undefined;
    expirationDuration?: number | undefined;
    expirationDurationUnit?: TypesCreditGrantExpiryDurationUnit | undefined;
    expirationType?: TypesCreditGrantExpiryType | undefined;
    id?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
    period?: TypesCreditGrantPeriod | undefined;
    periodCount?: number | undefined;
    planId?: string | undefined;
    priority?: number | undefined;
    scope?: TypesCreditGrantScope | undefined;
    startDate?: string | undefined;
    status?: TypesStatus | undefined;
    subscriptionId?: string | undefined;
    tenantId?: string | undefined;
    /**
     * topup_conversion_rate is the conversion rate for the topup to the currency
     *
     * @remarks
     * ex if topup_conversion_rate is 1, then 1 USD = 1 credit
     * ex if topup_conversion_rate is 2, then 1 USD = 0.5 credits
     * ex if topup_conversion_rate is 0.5, then 1 USD = 2 credits
     */
    topupConversionRate?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const DtoCreditGrantResponse$inboundSchema: z.ZodType<DtoCreditGrantResponse, z.ZodTypeDef, unknown>;
export declare function dtoCreditGrantResponseFromJSON(jsonString: string): SafeParseResult<DtoCreditGrantResponse, SDKValidationError>;
//# sourceMappingURL=dtocreditgrantresponse.d.ts.map