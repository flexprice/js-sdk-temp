import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoEventCostInfo } from "./dtoeventcostinfo.js";
export type DtoGetHuggingFaceBillingDataResponse = {
    requests?: Array<DtoEventCostInfo> | undefined;
};
/** @internal */
export declare const DtoGetHuggingFaceBillingDataResponse$inboundSchema: z.ZodType<DtoGetHuggingFaceBillingDataResponse, z.ZodTypeDef, unknown>;
export declare function dtoGetHuggingFaceBillingDataResponseFromJSON(jsonString: string): SafeParseResult<DtoGetHuggingFaceBillingDataResponse, SDKValidationError>;
//# sourceMappingURL=dtogethuggingfacebillingdataresponse.d.ts.map