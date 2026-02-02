import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoCostsheetResponse } from "./dto-costsheet-response.js";
export type DtoUpdateCostsheetResponse = {
    costsheet?: DtoCostsheetResponse | undefined;
};
/** @internal */
export declare const DtoUpdateCostsheetResponse$inboundSchema: z.ZodType<DtoUpdateCostsheetResponse, z.ZodTypeDef, unknown>;
export declare function dtoUpdateCostsheetResponseFromJSON(jsonString: string): SafeParseResult<DtoUpdateCostsheetResponse, SDKValidationError>;
//# sourceMappingURL=dto-update-costsheet-response.d.ts.map