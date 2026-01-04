import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoCostsheetResponse } from "./dtocostsheetresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListCostsheetResponse = {
    items?: Array<DtoCostsheetResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListCostsheetResponse$inboundSchema: z.ZodType<DtoListCostsheetResponse, z.ZodTypeDef, unknown>;
export declare function dtoListCostsheetResponseFromJSON(jsonString: string): SafeParseResult<DtoListCostsheetResponse, SDKValidationError>;
//# sourceMappingURL=dtolistcostsheetresponse.d.ts.map