import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoUsageAnalyticItem } from "./dto-usage-analytic-item.js";
export type DtoGetUsageAnalyticsResponse = {
    currency?: string | undefined;
    items?: Array<DtoUsageAnalyticItem> | undefined;
    totalCost?: string | undefined;
};
/** @internal */
export declare const DtoGetUsageAnalyticsResponse$inboundSchema: z.ZodType<DtoGetUsageAnalyticsResponse, z.ZodTypeDef, unknown>;
export declare function dtoGetUsageAnalyticsResponseFromJSON(jsonString: string): SafeParseResult<DtoGetUsageAnalyticsResponse, SDKValidationError>;
//# sourceMappingURL=dto-get-usage-analytics-response.d.ts.map