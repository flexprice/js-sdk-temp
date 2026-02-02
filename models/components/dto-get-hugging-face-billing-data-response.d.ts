import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoEventCostInfo } from "./dto-event-cost-info.js";
export type DtoGetHuggingFaceBillingDataResponse = {
    requests?: Array<DtoEventCostInfo> | undefined;
};
/** @internal */
export declare const DtoGetHuggingFaceBillingDataResponse$inboundSchema: z.ZodType<DtoGetHuggingFaceBillingDataResponse, z.ZodTypeDef, unknown>;
export declare function dtoGetHuggingFaceBillingDataResponseFromJSON(jsonString: string): SafeParseResult<DtoGetHuggingFaceBillingDataResponse, SDKValidationError>;
//# sourceMappingURL=dto-get-hugging-face-billing-data-response.d.ts.map