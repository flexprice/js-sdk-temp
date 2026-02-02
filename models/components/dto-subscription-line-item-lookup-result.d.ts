import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoMatchedSubscriptionLineItem } from "./dto-matched-subscription-line-item.js";
import { ErrorsErrorResponse } from "./errors-error-response.js";
import { TypesDebugTrackerStatus } from "./types-debug-tracker-status.js";
export type DtoSubscriptionLineItemLookupResult = {
    error?: ErrorsErrorResponse | undefined;
    matchedLineItems?: Array<DtoMatchedSubscriptionLineItem> | undefined;
    status?: TypesDebugTrackerStatus | undefined;
};
/** @internal */
export declare const DtoSubscriptionLineItemLookupResult$inboundSchema: z.ZodType<DtoSubscriptionLineItemLookupResult, z.ZodTypeDef, unknown>;
export declare function dtoSubscriptionLineItemLookupResultFromJSON(jsonString: string): SafeParseResult<DtoSubscriptionLineItemLookupResult, SDKValidationError>;
//# sourceMappingURL=dto-subscription-line-item-lookup-result.d.ts.map