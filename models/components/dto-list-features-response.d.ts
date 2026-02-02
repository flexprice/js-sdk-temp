import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoFeatureResponse } from "./dto-feature-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListFeaturesResponse = {
    items?: Array<DtoFeatureResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListFeaturesResponse$inboundSchema: z.ZodType<DtoListFeaturesResponse, z.ZodTypeDef, unknown>;
export declare function dtoListFeaturesResponseFromJSON(jsonString: string): SafeParseResult<DtoListFeaturesResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-features-response.d.ts.map