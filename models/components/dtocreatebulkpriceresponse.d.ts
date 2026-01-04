import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoPriceResponse } from "./dtopriceresponse.js";
export type DtoCreateBulkPriceResponse = {
    items?: Array<DtoPriceResponse> | undefined;
};
/** @internal */
export declare const DtoCreateBulkPriceResponse$inboundSchema: z.ZodType<DtoCreateBulkPriceResponse, z.ZodTypeDef, unknown>;
export declare function dtoCreateBulkPriceResponseFromJSON(jsonString: string): SafeParseResult<DtoCreateBulkPriceResponse, SDKValidationError>;
//# sourceMappingURL=dtocreatebulkpriceresponse.d.ts.map