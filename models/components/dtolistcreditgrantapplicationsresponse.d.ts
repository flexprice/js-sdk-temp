import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoCreditGrantApplicationResponse } from "./dtocreditgrantapplicationresponse.js";
import { TypesPaginationResponse } from "./typespaginationresponse.js";
export type DtoListCreditGrantApplicationsResponse = {
    items?: Array<DtoCreditGrantApplicationResponse> | undefined;
    pagination?: TypesPaginationResponse | undefined;
};
/** @internal */
export declare const DtoListCreditGrantApplicationsResponse$inboundSchema: z.ZodType<DtoListCreditGrantApplicationsResponse, z.ZodTypeDef, unknown>;
export declare function dtoListCreditGrantApplicationsResponseFromJSON(jsonString: string): SafeParseResult<DtoListCreditGrantApplicationsResponse, SDKValidationError>;
//# sourceMappingURL=dtolistcreditgrantapplicationsresponse.d.ts.map