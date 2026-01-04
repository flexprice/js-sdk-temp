import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoPriceResponse } from "./dtopriceresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListPricesResponse = {
    items?: Array<DtoPriceResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListPricesResponse$inboundSchema: z.ZodType<DtoListPricesResponse, z.ZodTypeDef, unknown>;
export declare function dtoListPricesResponseFromJSON(jsonString: string): SafeParseResult<DtoListPricesResponse, SDKValidationError>;
//# sourceMappingURL=dtolistpricesresponse.d.ts.map