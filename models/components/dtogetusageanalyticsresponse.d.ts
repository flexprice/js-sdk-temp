import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoUsageAnalyticItem } from "./dtousageanalyticitem.js";
export type DtoGetUsageAnalyticsResponse = {
    currency?: string | undefined;
    items?: Array<DtoUsageAnalyticItem> | undefined;
    totalCost?: string | undefined;
};
/** @internal */
export declare const DtoGetUsageAnalyticsResponse$inboundSchema: z.ZodType<DtoGetUsageAnalyticsResponse, z.ZodTypeDef, unknown>;
export declare function dtoGetUsageAnalyticsResponseFromJSON(jsonString: string): SafeParseResult<DtoGetUsageAnalyticsResponse, SDKValidationError>;
//# sourceMappingURL=dtogetusageanalyticsresponse.d.ts.map