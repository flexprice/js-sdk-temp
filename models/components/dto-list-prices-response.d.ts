import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoPriceResponse } from "./dto-price-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListPricesResponse = {
    items?: Array<DtoPriceResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListPricesResponse$inboundSchema: z.ZodType<DtoListPricesResponse, z.ZodTypeDef, unknown>;
export declare function dtoListPricesResponseFromJSON(jsonString: string): SafeParseResult<DtoListPricesResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-prices-response.d.ts.map