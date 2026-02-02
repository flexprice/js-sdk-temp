import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoPriceUnitResponse } from "./dto-price-unit-response.js";
import { TypesPaginationResponse } from "./types-pagination-response.js";
export type DtoListPriceUnitsResponse = {
    items?: Array<DtoPriceUnitResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListPriceUnitsResponse$inboundSchema: z.ZodType<DtoListPriceUnitsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListPriceUnitsResponseFromJSON(jsonString: string): SafeParseResult<DtoListPriceUnitsResponse, SDKValidationError>;
//# sourceMappingURL=dto-list-price-units-response.d.ts.map