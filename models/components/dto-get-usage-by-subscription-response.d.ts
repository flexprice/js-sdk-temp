import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoSubscriptionUsageByMetersResponse } from "./dto-subscription-usage-by-meters-response.js";
export type DtoGetUsageBySubscriptionResponse = {
    amount?: number | undefined;
    charges?: Array<DtoSubscriptionUsageByMetersResponse> | undefined;
    commitmentAmount?: number | undefined;
    /**
     * Amount of commitment used
     */
    commitmentUtilized?: number | undefined;
    currency?: string | undefined;
    displayAmount?: string | undefined;
    endTime?: string | undefined;
    /**
     * Whether any usage exceeded commitment
     */
    hasOverage?: boolean | undefined;
    /**
     * Amount charged at overage rate
     */
    overageAmount?: number | undefined;
    overageFactor?: number | undefined;
    startTime?: string | undefined;
};
/** @internal */
export declare const DtoGetUsageBySubscriptionResponse$inboundSchema: z.ZodType<DtoGetUsageBySubscriptionResponse, z.ZodTypeDef, unknown>;
export declare function dtoGetUsageBySubscriptionResponseFromJSON(jsonString: string): SafeParseResult<DtoGetUsageBySubscriptionResponse, SDKValidationError>;
//# sourceMappingURL=dto-get-usage-by-subscription-response.d.ts.map