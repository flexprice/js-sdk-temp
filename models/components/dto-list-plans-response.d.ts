import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoPlanResponse } from "./dto-plan-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListPlansResponse = {
    items?: Array<DtoPlanResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListPlansResponse$inboundSchema: z.ZodType<DtoListPlansResponse, z.ZodTypeDef, unknown>;
export declare function dtoListPlansResponseFromJSON(jsonString: string): SafeParseResult<DtoListPlansResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-plans-response.d.ts.map