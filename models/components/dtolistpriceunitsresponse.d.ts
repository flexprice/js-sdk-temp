import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoPriceUnitResponse } from "./dtopriceunitresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListPriceUnitsResponse = {
    items?: Array<DtoPriceUnitResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListPriceUnitsResponse$inboundSchema: z.ZodType<DtoListPriceUnitsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListPriceUnitsResponseFromJSON(jsonString: string): SafeParseResult<DtoListPriceUnitsResponse, SDKValidationError>;
//# sourceMappingURL=dtolistpriceunitsresponse.d.ts.map