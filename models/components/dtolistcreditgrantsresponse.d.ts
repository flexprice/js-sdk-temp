import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoCreditGrantResponse } from "./dtocreditgrantresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListCreditGrantsResponse = {
    items?: Array<DtoCreditGrantResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListCreditGrantsResponse$inboundSchema: z.ZodType<DtoListCreditGrantsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListCreditGrantsResponseFromJSON(jsonString: string): SafeParseResult<DtoListCreditGrantsResponse, SDKValidationError>;
//# sourceMappingURL=dtolistcreditgrantsresponse.d.ts.map