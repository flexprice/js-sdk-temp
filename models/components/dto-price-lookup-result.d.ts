import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoMatchedPrice } from "./dto-matched-price.js";
import { ErrorsErrorResponse } from "./errors-error-response.js";
import { TypesDebugTrackerStatus } from "./types-debug-tracker-status.js";
export type DtoPriceLookupResult = {
    error?: ErrorsErrorResponse | undefined;
    matchedPrices?: Array<DtoMatchedPrice> | undefined;
    status?: TypesDebugTrackerStatus | undefined;
};
/** @internal */
export declare const DtoPriceLookupResult$inboundSchema: z.ZodType<DtoPriceLookupResult, z.ZodTypeDef, unknown>;
export declare function dtoPriceLookupResultFromJSON(jsonString: string): SafeParseResult<DtoPriceLookupResult, SDKValidationError>;
//# sourceMappingURL=dto-price-lookup-result.d.ts.map