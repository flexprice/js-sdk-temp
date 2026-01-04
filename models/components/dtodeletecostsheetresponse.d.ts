import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DtoDeleteCostsheetResponse = {
    id?: string | undefined;
    message?: string | undefined;
};
/** @internal */
export declare const DtoDeleteCostsheetResponse$inboundSchema: z.ZodType<DtoDeleteCostsheetResponse, z.ZodTypeDef, unknown>;
export declare function dtoDeleteCostsheetResponseFromJSON(jsonString: string): SafeParseResult<DtoDeleteCostsheetResponse, SDKValidationError>;
//# sourceMappingURL=dtodeletecostsheetresponse.d.ts.map