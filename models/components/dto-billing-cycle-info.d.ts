import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesBillingCadence } from "./types-billing-cadence.js";
import { TypesBillingPeriod } from "./types-billing-period.js";
export type DtoBillingCycleInfo = {
    /**
     * billing_anchor is the new billing anchor
     */
    billingAnchor?: string | undefined;
    billingCadence?: TypesBillingCadence | undefined;
    billingPeriod?: TypesBillingPeriod | undefined;
    /**
     * billing_period_count is the billing period count
     */
    billingPeriodCount?: number | undefined;
    /**
     * period_end is the end of the new billing period
     */
    periodEnd?: string | undefined;
    /**
     * period_start is the start of the new billing period
     */
    periodStart?: string | undefined;
};
/** @internal */
export declare const DtoBillingCycleInfo$inboundSchema: z.ZodType<DtoBillingCycleInfo, z.ZodTypeDef, unknown>;
export declare function dtoBillingCycleInfoFromJSON(jsonString: string): SafeParseResult<DtoBillingCycleInfo, SDKValidationError>;
//# sourceMappingURL=dto-billing-cycle-info.d.ts.map