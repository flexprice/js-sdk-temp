import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoPriceResponse } from "./dto-price-response.js";
export type DtoCreateBulkPriceResponse = {
    items?: Array<DtoPriceResponse> | undefined;
};
/** @internal */
export declare const DtoCreateBulkPriceResponse$inboundSchema: z.ZodType<DtoCreateBulkPriceResponse, z.ZodTypeDef, unknown>;
export declare function dtoCreateBulkPriceResponseFromJSON(jsonString: string): SafeParseResult<DtoCreateBulkPriceResponse, SDKValidationError>;
//# sourceMappingURL=dto-create-bulk-price-response.d.ts.map