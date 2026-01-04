import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoFeatureResponse } from "./dtofeatureresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListFeaturesResponse = {
    items?: Array<DtoFeatureResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListFeaturesResponse$inboundSchema: z.ZodType<DtoListFeaturesResponse, z.ZodTypeDef, unknown>;
export declare function dtoListFeaturesResponseFromJSON(jsonString: string): SafeParseResult<DtoListFeaturesResponse, SDKValidationError>;
//# sourceMappingURL=dtolistfeaturesresponse.d.ts.map