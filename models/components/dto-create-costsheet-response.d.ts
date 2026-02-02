import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoCostsheetResponse } from "./dto-costsheet-response.js";
export type DtoCreateCostsheetResponse = {
    costsheet?: DtoCostsheetResponse | undefined;
};
/** @internal */
export declare const DtoCreateCostsheetResponse$inboundSchema: z.ZodType<DtoCreateCostsheetResponse, z.ZodTypeDef, unknown>;
export declare function dtoCreateCostsheetResponseFromJSON(jsonString: string): SafeParseResult<DtoCreateCostsheetResponse, SDKValidationError>;
//# sourceMappingURL=dto-create-costsheet-response.d.ts.map