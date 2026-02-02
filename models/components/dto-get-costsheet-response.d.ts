import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoCostsheetResponse } from "./dto-costsheet-response.js";
export type DtoGetCostsheetResponse = {
    costsheet?: DtoCostsheetResponse | undefined;
};
/** @internal */
export declare const DtoGetCostsheetResponse$inboundSchema: z.ZodType<DtoGetCostsheetResponse, z.ZodTypeDef, unknown>;
export declare function dtoGetCostsheetResponseFromJSON(jsonString: string): SafeParseResult<DtoGetCostsheetResponse, SDKValidationError>;
//# sourceMappingURL=dto-get-costsheet-response.d.ts.map