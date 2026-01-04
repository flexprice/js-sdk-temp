import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DtoProrationDetails = {
    /**
     * charge_amount is the charge amount for the new subscription
     */
    chargeAmount?: string | undefined;
    /**
     * charge_description describes what the charge is for
     */
    chargeDescription?: string | undefined;
    /**
     * credit_amount is the credit amount from the old subscription
     */
    creditAmount?: string | undefined;
    /**
     * credit_description describes what the credit is for
     */
    creditDescription?: string | undefined;
    /**
     * currency is the currency for all amounts
     */
    currency?: string | undefined;
    /**
     * current_period_end is the end of the current billing period
     */
    currentPeriodEnd?: string | undefined;
    /**
     * current_period_start is the start of the current billing period
     */
    currentPeriodStart?: string | undefined;
    /**
     * days_remaining is the number of days remaining in the current period
     */
    daysRemaining?: number | undefined;
    /**
     * days_used is the number of days used in the current period
     */
    daysUsed?: number | undefined;
    /**
     * net_amount is the net amount (charge - credit)
     */
    netAmount?: string | undefined;
    /**
     * proration_date is the date used for proration calculations
     */
    prorationDate?: string | undefined;
};
/** @internal */
export declare const DtoProrationDetails$inboundSchema: z.ZodType<DtoProrationDetails, z.ZodTypeDef, unknown>;
export declare function dtoProrationDetailsFromJSON(jsonString: string): SafeParseResult<DtoProrationDetails, SDKValidationError>;
//# sourceMappingURL=dtoprorationdetails.d.ts.map