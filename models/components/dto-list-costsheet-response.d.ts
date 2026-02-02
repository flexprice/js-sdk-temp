import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoCostsheetResponse } from "./dto-costsheet-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListCostsheetResponse = {
    items?: Array<DtoCostsheetResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListCostsheetResponse$inboundSchema: z.ZodType<DtoListCostsheetResponse, z.ZodTypeDef, unknown>;
export declare function dtoListCostsheetResponseFromJSON(jsonString: string): SafeParseResult<DtoListCostsheetResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-costsheet-response.d.ts.map